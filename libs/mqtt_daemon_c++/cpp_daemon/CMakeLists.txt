cmake_minimum_required(VERSION 3.13)
project(mqtt_daemon_cpp CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Check common installation paths for macOS
if(EXISTS "/opt/homebrew")
    set(HOMEBREW_PREFIX "/opt/homebrew")
else()
    set(HOMEBREW_PREFIX "/usr/local")
endif()

# Find Paho MQTT C++ library
find_path(PAHO_MQTT_CPP_INCLUDE_DIR
    NAMES mqtt/async_client.h
    PATHS ${HOMEBREW_PREFIX}/include
    PATH_SUFFIXES mqtt
    NO_DEFAULT_PATH
)

find_library(PAHO_MQTT_CPP_LIBRARY
    NAMES paho-mqttpp3
    PATHS ${HOMEBREW_PREFIX}/lib
    NO_DEFAULT_PATH
)

# Find Paho MQTT C library
find_library(PAHO_MQTT_C_LIBRARY
    NAMES paho-mqtt3as
    PATHS ${HOMEBREW_PREFIX}/lib
    NO_DEFAULT_PATH
)

# Check if libraries were found
if(NOT PAHO_MQTT_CPP_INCLUDE_DIR)
    message(FATAL_ERROR "Paho MQTT C++ include directory not found. Please ensure the library is installed.")
endif()

if(NOT PAHO_MQTT_CPP_LIBRARY)
    message(FATAL_ERROR "Paho MQTT C++ library not found. Please ensure the library is installed.")
endif()

if(NOT PAHO_MQTT_C_LIBRARY)
    message(FATAL_ERROR "Paho MQTT C library not found. Please ensure the library is installed.")
endif()

# Print found libraries (for debugging)
message(STATUS "Found Paho MQTT C++ include dir: ${PAHO_MQTT_CPP_INCLUDE_DIR}")
message(STATUS "Found Paho MQTT C++ library: ${PAHO_MQTT_CPP_LIBRARY}")
message(STATUS "Found Paho MQTT C library: ${PAHO_MQTT_C_LIBRARY}")

# Add the executable
add_executable(mqtt_daemon_cpp mqtt_daemon.cpp)

# Include directories
target_include_directories(mqtt_daemon_cpp PRIVATE ${PAHO_MQTT_CPP_INCLUDE_DIR} ${PAHO_MQTT_CPP_INCLUDE_DIR}/..)

# Link libraries
target_link_libraries(mqtt_daemon_cpp
    ${PAHO_MQTT_CPP_LIBRARY}
    ${PAHO_MQTT_C_LIBRARY}
)

# Install
install(TARGETS mqtt_daemon_cpp DESTINATION bin)

