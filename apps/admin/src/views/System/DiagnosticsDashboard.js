import React, { useContext, useEffect, useState } from 'react'

import {
  Box,
  Button,
  ButtonText,
  ButtonIcon,
  CheckIcon,
  CloseIcon,
  HStack,
  FlatList,
  FormControl,
  Input,
  InputField,
  Text,
  VStack,
  ScrollView,
  Divider,
  useColorMode
} from '@gluestack-ui/themed'

import { AlertContext } from 'AppContext'
import { api } from 'api'
import { ListHeader } from 'components/List'

// Mock Data
const initialData = {
  satellite: {
    modem: {
      serialNumber: 'y0026b',
      firmwareVersion: '1.3.4',
      apiVersion: '1.2.0',
      enabled: true,
      dataEnabled: true,
      imei: '300058060201440'
    },
    sim: {
      present: true,
      connected: true,
      iccid: '89881697710002167066'
    },
    provisioning: {
      valid: true,
      fullyCompatible: true,
      messaging: false,
      data: true,
      voice: false
    }
  },
  cellular: {
    modem: {
      enabled: true,
      manufacturer: 'Quectel',
      model: 'EM12-G',
      imei: '869710031132206'
    },
    sim: {
      present: true,
      iccid: '89104100000021647139',
      apn: 'gigsky',
      imsi: '310380501311210',
      mcc: '310',
      mnc: '380',
      spn: 'GigSky'
    },
    signal: {
      connected: true,
      network: '302, 720',
      networkName: 'ROGERS',
      strength: '-84 dBm',
      quality: '-13 dB',
      technology: 'lte'
    }
  },
  troubleshooting: {
    operation: 'Ping',
    networkInterface: 'Cellular',
    numberOfPings: 5,
    networkAddress: ''
  }
}

// Status indicator component
const StatusIndicator = ({ status }) => {
  return status ? (
    <CheckIcon color="$green500" size="sm" />
  ) : (
    <CloseIcon color="$red500" size="sm" />
  )
}

// InfoRow component for uniform display of key-value pairs
const InfoRow = ({ label, value, isStatus = false }) => {
  const colorMode = useColorMode()
  
  return (
    <HStack
      space="md"
      p="$2"
      bg={
        colorMode == 'light'
          ? '$backgroundCardLight'
          : '$backgroundCardDark'
      }
      borderBottomColor={
        colorMode == 'light'
          ? '$borderColorCardLight'
          : '$borderColorCardDark'
      }
      borderBottomWidth={1}
      justifyContent="space-between"
    >
      <Text size="sm">{label}</Text>
      {isStatus ? (
        <StatusIndicator status={value} />
      ) : (
        <Text color="$muted500">{value}</Text>
      )}
    </HStack>
  )
}

// InfoCard component for displaying a section of information
const InfoCard = ({ title, data, columns = 1 }) => {
  const colorMode = useColorMode()
  
  return (
    <Box
      bg={
        colorMode == 'light'
          ? '$backgroundCardLight'
          : '$backgroundCardDark'
      }
      p="$2"
      mb="$3"
      borderRadius="$md"
    >
      <Text fontWeight="$bold" color="$blue600" mb="$1" px="$2">
        {title}
      </Text>
      <Box
        sx={{
          '@base': { flexDirection: 'column' },
          '@md': { flexDirection: 'row' }
        }}
      >
        {columns > 1 ? (
          <>
            {Array.from({ length: columns }).map((_, columnIndex) => (
              <Box key={columnIndex} flex={1} mr={columnIndex < columns - 1 ? '$2' : 0}>
                {Object.entries(data)
                  .filter((_, index) => index % columns === columnIndex)
                  .map(([key, value], index) => (
                    <InfoRow
                      key={key}
                      label={key}
                      value={value}
                      isStatus={typeof value === 'boolean'}
                    />
                  ))}
              </Box>
            ))}
          </>
        ) : (
          <Box flex={1}>
            {Object.entries(data).map(([key, value], index) => (
              <InfoRow
                key={key}
                label={key}
                value={value}
                isStatus={typeof value === 'boolean'}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

const DiagnosticsDashboard = () => {
  const context = useContext(AlertContext)
  const [data, setData] = useState(initialData)
  const [networkAddress, setNetworkAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // This would be replaced with actual API calls
    const fetchData = () => {
      setIsLoading(true)
      // Simulating API call
      setTimeout(() => {
        setData(initialData)
        setIsLoading(false)
      }, 500)
      
      // mock api call
      // api
      //   .get('/network/info')
      //   .then(setData)
      //   .catch((err) => context.error('Failed to fetch network information', err))
      //   .finally(() => setIsLoading(false))
    }

    fetchData()

    // Refresh data periodically
    const interval = setInterval(fetchData, 30 * 1000)
    return () => clearInterval(interval)
  }, [])

  const executeTroubleshooting = () => {

    context.success('Network troubleshooting started')
    
    // api
    //   .post('/network/troubleshoot', {
    //     operation: data.troubleshooting.operation,
    //     interface: data.troubleshooting.networkInterface,
    //     pings: data.troubleshooting.numberOfPings,
    //     address: networkAddress
    //   })
    //   .then(() => context.success('Network troubleshooting started'))
    //   .catch((err) => context.error('Failed to start troubleshooting', err))
  }

  // Format the data for display
  const satelliteModemData = {
    'Serial Number': data.satellite.modem.serialNumber,
    'Firmware Version': data.satellite.modem.firmwareVersion,
    'API Version': data.satellite.modem.apiVersion,
    'Enabled': data.satellite.modem.enabled,
    'Data Enabled': data.satellite.modem.dataEnabled,
    'IMEI': data.satellite.modem.imei
  }

  const satelliteSimData = {
    'Present': data.satellite.sim.present,
    'Connected': data.satellite.sim.connected,
    'ICCID': data.satellite.sim.iccid
  }

  const satelliteProvisioningData = {
    'Valid': data.satellite.provisioning.valid,
    'Fully Compatible': data.satellite.provisioning.fullyCompatible,
    'Messaging': data.satellite.provisioning.messaging,
    'Data': data.satellite.provisioning.data,
    'Voice': data.satellite.provisioning.voice
  }

  const cellularModemData = {
    'Enabled': data.cellular.modem.enabled,
    'Manufacturer': data.cellular.modem.manufacturer,
    'Model': data.cellular.modem.model,
    'IMEI': data.cellular.modem.imei
  }

  const cellularSimData = {
    'Present': data.cellular.sim.present,
    'ICCID': data.cellular.sim.iccid,
    'APN': data.cellular.sim.apn,
    'IMSI': data.cellular.sim.imsi,
    'MCC': data.cellular.sim.mcc,
    'MNC': data.cellular.sim.mnc,
    'SPN': data.cellular.sim.spn
  }

  const cellularSignalData = {
    'Connected': data.cellular.signal.connected,
    'Network': data.cellular.signal.network,
    'Network Name': data.cellular.signal.networkName,
    'Strength': data.cellular.signal.strength,
    'Quality': data.cellular.signal.quality,
    'Technology': data.cellular.signal.technology
  }

  return (
    <ScrollView h="$full" sx={{ '@md': { h: '92vh' } }}>
      <VStack space="md">
        {/* Satellite Information Section */}
        <ListHeader title="Satellite Information" />
        
        <Box
          sx={{
            '@base': { flexDirection: 'column' },
            '@md': { flexDirection: 'row', gap: '$2' }
          }}
        >
          <Box sx={{ '@md': { flex: 1 } }}>
            <InfoCard title="Modem" data={satelliteModemData} columns={2} />
            <InfoCard title="SIM" data={satelliteSimData} />
          </Box>
          <Box sx={{ '@md': { flex: 1 } }}>
            <InfoCard title="Provisioning" data={satelliteProvisioningData} columns={2} />
          </Box>
        </Box>
        
        {/* Cellular Information Section */}
        <ListHeader title="Cellular Information" />
        
        <Box
          sx={{
            '@base': { flexDirection: 'column' },
            '@md': { flexDirection: 'row', gap: '$2' }
          }}
        >
          <Box sx={{ '@md': { flex: 1 } }}>
            <InfoCard title="Modem" data={cellularModemData} />
            <InfoCard title="Signal" data={cellularSignalData} columns={2} />
          </Box>
          <Box sx={{ '@md': { flex: 1 } }}>
            <InfoCard title="SIM" data={cellularSimData} columns={2} />
          </Box>
        </Box>
        
        {/* Network Troubleshooting Section */}
        <ListHeader title="Network Troubleshooting">
          <Button action="primary" size="sm" onPress={executeTroubleshooting} isDisabled={isLoading}>
            <ButtonText>Execute</ButtonText>
          </Button>
        </ListHeader>
        
        <Box
          bg={useColorMode() == 'light' ? '$backgroundCardLight' : '$backgroundCardDark'}
          p="$4"
          borderRadius="$md"
        >
          <HStack space="md" alignItems="center" flexWrap="wrap">
            <HStack space="xs" alignItems="center" minWidth="$32">
              <Text size="sm">Operation:</Text>
              <Text color="$muted500">{data.troubleshooting.operation}</Text>
            </HStack>
            
            <HStack space="xs" alignItems="center" minWidth="$32">
              <Text size="sm">Network Interface:</Text>
              <Text color="$muted500">{data.troubleshooting.networkInterface}</Text>
            </HStack>
            
            <HStack space="xs" alignItems="center" minWidth="$16">
              <Text size="sm">Pings:</Text>
              <Text color="$muted500">{data.troubleshooting.numberOfPings}</Text>
            </HStack>
            
            <HStack space="xs" alignItems="center" flex={1} mt={{ base: "$2", md: 0 }}>
              <Text size="sm" mr="$2">Network Address:</Text>
              <FormControl flex={1}>
                <Input variant="outline" size="sm">
                  <InputField
                    placeholder="Enter address to ping"
                    value={networkAddress}
                    onChangeText={setNetworkAddress}
                  />
                </Input>
              </FormControl>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </ScrollView>
  )
}

export default DiagnosticsDashboard
