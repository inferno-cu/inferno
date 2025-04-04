import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  ScrollView,
  Switch,
  Pressable,
  Input,
  InputField,
  Icon,
  useColorMode
} from '@gluestack-ui/themed';
import { RefreshCw, Search, X, AlertCircle, Info, CheckCircle2 } from 'lucide-react-native';

const LogEntry = ({ type, message, timestamp }) => {
  const { colorMode } = useColorMode();
  const typeColors = {
    error: { light: '$red500', dark: '$red400' },
    warning: { light: '$amber500', dark: '$amber400' },
    info: { light: '$blue500', dark: '$blue400' },
    success: { light: '$green500', dark: '$green400' }
  };

  const getIcon = () => {
    switch(type) {
      case 'error': return <AlertCircle size={16} color={typeColors.error[colorMode]} />;
      case 'warning': return <AlertCircle size={16} color={typeColors.warning[colorMode]} />;
      case 'success': return <CheckCircle2 size={16} color={typeColors.success[colorMode]} />;
      default: return <Info size={16} color={typeColors.info[colorMode]} />;
    }
  };

  return (
    <HStack space="sm" alignItems="flex-start" py="$2" borderBottomWidth={1} 
      borderBottomColor={colorMode === 'light' ? '$coolGray200' : '$coolGray700'}>
      <Box pt="$1">
        {getIcon()}
      </Box>
      <VStack flex={1}>
        <Text fontSize="$sm" color={colorMode === 'light' ? '$coolGray800' : '$coolGray200'}>
          {message}
        </Text>
        <Text fontSize="$xs" color={colorMode === 'light' ? '$coolGray500' : '$coolGray400'}>
          {new Date(timestamp).toLocaleTimeString()}
        </Text>
      </VStack>
    </HStack>
  );
};

const Log = () => {
  const { colorMode } = useColorMode();
  const [logs, setLogs] = useState([]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(5000);
  const [searchTerm, setSearchTerm] = useState('');
  const [logLevel, setLogLevel] = useState('all');
  const scrollViewRef = useRef(null);

  // Generate mock logs
  const generateMockLog = () => {
    const types = ['info', 'warning', 'error', 'success'];
    const messages = [
      'System check completed',
      'Network connection established',
      'Failed to load resource',
      'User authentication successful',
      'Disk space running low',
      'Security scan completed',
      'Database backup initiated',
      'Connection timeout occurred'
    ];
    
    return {
      type: types[Math.floor(Math.random() * types.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
      timestamp: Date.now()
    };
  };

  // Load or refresh logs
  const refreshLogs = () => {
    const newLogs = Array.from({ length: 5 }, () => generateMockLog());
    setLogs(prev => [...newLogs, ...prev].slice(0, 100)); // Keep max 100 logs
  };

  // Auto-refresh effect
  useEffect(() => {
    refreshLogs();
    
    const interval = autoRefresh ? setInterval(refreshLogs, refreshInterval) : null;
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval]);

  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [logs]);

  // Filter logs based on search and log level
  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = logLevel === 'all' || log.type === logLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <Box flex={1}  p="$4">
      <VStack space="md" flex={1}>
        <Text fontSize="$2xl" fontWeight="bold">System Logs</Text>
        
        {/* Controls */}
        <HStack space="md" alignItems="center">
          <HStack flex={1} alignItems="center" space="sm">
            <Icon as={Search} size="sm" color={colorMode === 'light' ? '$coolGray500' : '$coolGray400'} />
            <Input flex={1} variant="underlined">
              <InputField 
                placeholder="Search logs..." 
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
              {searchTerm && (
                <Pressable onPress={() => setSearchTerm('')}>
                  <Icon as={X} size="sm" color={colorMode === 'light' ? '$coolGray500' : '$coolGray400'} />
                </Pressable>
              )}
            </Input>
          </HStack>
          
          <Pressable onPress={refreshLogs}>
            <Icon as={RefreshCw} size="md" color={colorMode === 'light' ? '$coolGray700' : '$coolGray300'} />
          </Pressable>
        </HStack>
        
        {/* Filter controls */}
        <HStack space="sm" alignItems="center">
          <Text fontSize="$sm">Level:</Text>
          {['all', 'info', 'warning', 'error', 'success'].map(level => (
            <Pressable
              key={level}
              onPress={() => setLogLevel(level)}
              px="$2"
              py="$1"
              borderRadius="$sm"
              bg={logLevel === level ? 
                (colorMode === 'light' ? '$blue100' : '$blue800') : 
                'transparent'}
            >
              <Text 
                fontSize="$sm" 
                color={logLevel === level ? 
                  (colorMode === 'light' ? '$blue600' : '$blue300') : 
                  (colorMode === 'light' ? '$coolGray600' : '$coolGray300')}
                textTransform="capitalize"
              >
                {level}
              </Text>
            </Pressable>
          ))}
        </HStack>
        
        {/* Auto-refresh controls */}
        <HStack space="sm" alignItems="center">
          <Switch
            value={autoRefresh}
            onValueChange={setAutoRefresh}
            trackColor={{ true: colorMode === 'light' ? '$blue500' : '$blue400' }}
          />
          <Text fontSize="$sm">Auto-refresh</Text>
          {autoRefresh && (
            <>
              <Text fontSize="$sm">every</Text>
              <Pressable 
                onPress={() => setRefreshInterval(prev => prev === 5000 ? 10000 : 5000)}
                px="$2"
                py="$1"
                borderRadius="$sm"
                bg={colorMode === 'light' ? '$coolGray100' : '$coolGray800'}
              >
                <Text fontSize="$sm">
                  {refreshInterval === 5000 ? '5s' : '10s'}
                </Text>
              </Pressable>
            </>
          )}
        </HStack>
        
        {/* Log entries */}
        <Box flex={1} borderWidth={1} borderRadius="$md" 
          borderColor={colorMode === 'light' ? '$coolGray200' : '$coolGray700'}>
          <ScrollView ref={scrollViewRef}>
            <VStack p="$3" space="sm">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log, index) => (
                  <LogEntry key={`${log.timestamp}-${index}`} {...log} />
                ))
              ) : (
                <Text textAlign="center" py="$4" color={colorMode === 'light' ? '$coolGray500' : '$coolGray400'}>
                  No logs match your filters
                </Text>
              )}
            </VStack>
          </ScrollView>
        </Box>
      </VStack>
    </Box>
  );
};

export default Log;