import React from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  useColorMode,
  useToken,
  ScrollView
} from '@gluestack-ui/themed'

const InfoRow = ({ label, value }) => (
  <HStack justifyContent="space-between" px="$2">
    <Text size="md" color="$muted700" fontWeight="500">
      {label}
    </Text>
    <Text size="md" color="$text800">
      {value}
    </Text>
  </HStack>
)

const UsageTable = ({ title, data }) => (
  <VStack mt="$4" space="sm">
    <Text size="md" fontWeight="600" color="$primary600">
      {title}
    </Text>
    <HStack justifyContent="space-between" px="$2">
      <Text flex={1}></Text>
      <Text flex={1} textAlign="center" size="sm" color="$muted600">
        Bytes Sent
      </Text>
      <Text flex={1} textAlign="right" size="sm" color="$muted600">
        Bytes Received
      </Text>
    </HStack>
    {data.map((row, i) => (
      <HStack key={i} justifyContent="space-between" px="$2">
        <Text flex={1} size="md">{row.label}</Text>
        <Text flex={1} size="md" textAlign="center">{row.sent}</Text>
        <Text flex={1} size="md" textAlign="right">{row.received}</Text>
      </HStack>
    ))}
  </VStack>
)

const Card = ({ title, children }) => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardtDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'

  return (
    <Box
      bg={bg}
      borderRadius="$xl"
      p="$6"
      borderWidth={1}
      borderColor={border}
      width="100%"
      shadowColor="$black"
      shadowOpacity={0.08}
      shadowRadius={8}
    >
      {title && (
        <Text fontSize="$lg" fontWeight="600" color="$primary600" mb="$3">
          {title}
        </Text>
      )}
      {children}
    </Box>
  )
}

const SystemInformation = () => {
  const usageSatellite = [
    { label: '24 hrs', sent: '593', received: '30' },
    { label: '7 days', sent: '6,644', received: '180' },
    { label: 'Month', sent: '593', received: '30' }
  ]
  const usageCellular = [
    { label: '24 hrs', sent: '523,497', received: '1,544,610' },
    { label: '7 days', sent: '4,082,463', received: '38,140,892' },
    { label: 'Month', sent: '523,497', received: '1,544,610' }
  ]

  return (
    <ScrollView px="$6" py="$6" width="100%" minHeight="100%">
      <VStack space="lg" maxWidth={1600} alignSelf="center" width="100%">
        {/* System Info */}
        <Card title="System Information">
          <HStack flexWrap="wrap" justifyContent="space-between" space="lg">
            <VStack flex={1} minWidth="30%" space="sm">
              <InfoRow label="Serial Number:" value="0000-0F02" />
              <InfoRow label="Model:" value="SkyLink 7100" />
              <InfoRow label="Versions:" value="SYN267 REV H / 2.35.STS-PA01-00.01.05" />
              <InfoRow label="Capabilities:" value="Voice & Data Gateway" />
              <InfoRow label="System Time:" value="2025/4/1 20:39:50 UTC" />
            </VStack>
            <VStack flex={1} minWidth="30%" space="sm">
              <InfoRow label="Sat. IMEI:" value="300058060201440" />
              <InfoRow label="Sat. SIM:" value="8988169771000216706" />
              <InfoRow label="Sat. Temp.:" value="26.0°C" />
              <InfoRow label="Location:" value="UNDEFINED" />
            </VStack>
            <VStack flex={1} minWidth="30%" space="sm">
              <InfoRow label="Cell. IMEI:" value="869710031132206" />
              <InfoRow label="Cell. SIM:" value="89101400000021647139" />
              <InfoRow label="CPU Temp.:" value="45.0°C" />
              <InfoRow label="WiFi SSID:" value="SKYLINK-YOW-A" />
            </VStack>
          </HStack>
        </Card>

        {/* Satellite + Cellular */}
        <HStack flexWrap="wrap" space="lg">
          <Box flex={1} minWidth="48%">
            <Card title="Satellite">
              <VStack space="sm">
                <InfoRow label="Signal:" value="N/A" />
                <InfoRow label="Route:" value="Secondary" />
                <InfoRow label="On Net:" value="0%" />
                <UsageTable title="USAGE" data={usageSatellite} />
              </VStack>
            </Card>
          </Box>
          <Box flex={1} minWidth="48%">
            <Card title="Cellular">
              <VStack space="sm">
                <InfoRow label="Signal:" value="-84 dBm" />
                <InfoRow label="Route:" value="Primary, Active" />
                <InfoRow label="On Net:" value="100%" />
                <InfoRow label="Network:" value="ROGERS" />
                <UsageTable title="USAGE" data={usageCellular} />
              </VStack>
            </Card>
          </Box>
        </HStack>

        <Text
          size="xs"
          mt="$4"
          color="$red600"
          fontStyle="italic"
          textAlign="center"
        >
          Note: Usage tables are an estimate for reference and not associated with actual billing.
          Minimum sessions are rounded to 5,000 bytes.
        </Text>
      </VStack>
    </ScrollView>
  )
}

export default SystemInformation
