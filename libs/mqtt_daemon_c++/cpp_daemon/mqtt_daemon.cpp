#include <iostream>
#include <cstdlib>
#include <string>
#include <cstring>
#include <cctype>
#include <thread>
#include <chrono>
#include <fstream>
#include <sstream>
#include <unistd.h>
#include <signal.h>
#include <sys/stat.h>
#include <syslog.h>
#include "mqtt/async_client.h"

// MQTT settings
const std::string SERVER_ADDRESS("tcp://localhost:1883");
const std::string CLIENT_ID("cpp_mqtt_daemon");
const std::string TOPIC("test/topic");
const int QOS = 1;
const auto TIMEOUT = std::chrono::seconds(10);

volatile bool running = true;

// Signal handler function
void handle_signal(int sig) {
    running = false;
}

// Callback class for the MQTT client
class callback : public virtual mqtt::callback
{
public:
    void connection_lost(const std::string& cause) override {
        syslog(LOG_ERR, "Connection lost: %s", cause.c_str());
    }

    void message_arrived(mqtt::const_message_ptr msg) override {
        syslog(LOG_INFO, "Message arrived on topic: %s", msg->get_topic().c_str());
        syslog(LOG_INFO, "Message content: %s", msg->to_string().c_str());
    }

    void delivery_complete(mqtt::delivery_token_ptr token) override {
        syslog(LOG_INFO, "Message delivery complete");
    }
};

// Action listener for async operations
class action_listener : public virtual mqtt::iaction_listener
{
    std::string name_;

public:
    action_listener(const std::string& name) : name_(name) {}

    void on_failure(const mqtt::token& tok) override {
        syslog(LOG_ERR, "%s failure", name_.c_str());
    }

    void on_success(const mqtt::token& tok) override {
        syslog(LOG_INFO, "%s success", name_.c_str());
    }
};

// Daemonize the process
void daemonize() {
    pid_t pid = fork();
    
    if (pid < 0) {
        exit(EXIT_FAILURE);
    }
    
    if (pid > 0) {
        // Exit the parent process
        exit(EXIT_SUCCESS);
    }
    
    // Create new session and process group
    if (setsid() < 0) {
        exit(EXIT_FAILURE);
    }
    
    // Ignore signals
    signal(SIGCHLD, SIG_IGN);
    signal(SIGHUP, SIG_IGN);
    
    pid = fork();
    
    if (pid < 0) {
        exit(EXIT_FAILURE);
    }
    
    if (pid > 0) {
        exit(EXIT_SUCCESS);
    }
    
    // Set file permissions
    umask(0);
    
    // Change to root directory
    chdir("/");
    
    // Close all file descriptors
    for (int i = sysconf(_SC_OPEN_MAX); i >= 0; i--) {
        close(i);
    }
    
    // Open syslog
    openlog("mqtt_daemon_cpp", LOG_PID, LOG_DAEMON);
}

int main(int argc, char* argv[])
{
    // Check if daemon mode is requested
    bool daemon_mode = false;
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "-d") == 0 || strcmp(argv[i], "--daemon") == 0) {
            daemon_mode = true;
            break;
        }
    }
    
    // Run as daemon if requested
    if (daemon_mode) {
        daemonize();
    } else {
        // Open syslog in non-daemon mode
        openlog("mqtt_daemon_cpp", LOG_PID | LOG_PERROR, LOG_USER);
    }
    
    // Set up signal handlers
    signal(SIGINT, handle_signal);
    signal(SIGTERM, handle_signal);
    
    try {
        syslog(LOG_INFO, "MQTT Daemon (C++) starting...");
        
        // Create a client ID
        std::string clientID = CLIENT_ID + "_" + std::to_string(getpid());

        // Create MQTT client
        mqtt::async_client client(SERVER_ADDRESS, clientID);
        
        // Set up callbacks
        callback cb;
        client.set_callback(cb);
        
        // Set up connection options
        auto connOpts = mqtt::connect_options_builder()
            .keep_alive_interval(std::chrono::seconds(20))
            .clean_session(true)
            .finalize();
        
        // Setup action listeners
        action_listener subListener("Subscription");
        action_listener conListener("Connection");
            
        syslog(LOG_INFO, "Connecting to MQTT broker at %s...", SERVER_ADDRESS.c_str());
        client.connect(connOpts, nullptr, conListener)->wait();
        syslog(LOG_INFO, "Connected to MQTT broker");
        
        // Subscribe to topic
        syslog(LOG_INFO, "Subscribing to topic: %s", TOPIC.c_str());
        client.subscribe(TOPIC, QOS, nullptr, subListener)->wait();
        syslog(LOG_INFO, "Subscribed to topic");

        // Main loop
        int count = 0;
        while (running) {
            // Create and publish message
            std::string payload = "Hello from C++ MQTT Daemon: " + std::to_string(count++);
            mqtt::message_ptr pubmsg = mqtt::make_message(TOPIC, payload);
            pubmsg->set_qos(QOS);
            
            syslog(LOG_INFO, "Publishing message: %s", payload.c_str());
            client.publish(pubmsg)->wait_for(TIMEOUT);
            
            // Sleep for 10 seconds
            std::this_thread::sleep_for(std::chrono::seconds(10));
        }
        
        // Disconnect
        syslog(LOG_INFO, "Disconnecting from MQTT broker...");
        client.disconnect()->wait();
        syslog(LOG_INFO, "Disconnected from MQTT broker");
    }
    catch (const mqtt::exception& exc) {
        syslog(LOG_ERR, "MQTT Error: %s", exc.what());
    }
    catch (const std::exception& exc) {
        syslog(LOG_ERR, "Error: %s", exc.what());
    }
    
    closelog();
    return 0;
}

