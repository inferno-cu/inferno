import React from 'react'
import { VStack, HStack, Heading, Text, Box } from '@gluestack-ui/themed'
import { NetworkIcon, GaugeIcon, WifiIcon } from 'lucide-react-native'

const BandwidthUsage = () => {
  return (
    <VStack
      space="lg"
      p="$5"
      bg="$backgroundContentLight"
      sx={{ _dark: { bg: '$backgroundContentDark' } }}
    >
      {/* Header */}
      <VStack space="sm">
        <Heading
          size="xl"
          color="$primaryTextLight"
          sx={{ _dark: { color: '$primaryTextDark' } }}
        >
          Bandwidth Usage
        </Heading>
        <Text
          fontSize="sm"
          color="$textLight500"
          sx={{ _dark: { color: '$textDark500' } }}
        >
          Live monitoring of data throughput and device activity across interfaces.
        </Text>
      </VStack>

      {/* Stat Row */}
      <HStack space="md" mt="$4" flexWrap="wrap">
        <Stat label="Devices" value="3" icon={NetworkIcon} />
        <Stat label="Bandwidth (Mbps)" value="1250" icon={GaugeIcon} />
        <Stat label="Uptime" value="99.98%" icon={WifiIcon} />
      </HStack>

      {/* Bandwidth Panel */}
      <Box
        mt="$6"
        borderRadius="$2xl"
        overflow="hidden"
        borderWidth={1}
        borderColor="$borderColorCardLight"
        sx={{ _dark: { borderColor: '$borderColorCardDark' } }}
        bg="$backgroundCardLight"
        sx={{ _dark: { bg: '$backgroundCardDark' } }}
        shadow="2"
        style={{ height: '720px' }}
      >
        <iframe
          src="http://localhost:3001/d-solo/fehj0rtcn9csgb/march-31?orgId=1&from=now-30m&to=now&panelId=1&theme=dark"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            fontFamily: 'inherit'
          }}
          title="Bandwidth Panel"
        />
      </Box>
    </VStack>
  )
}

const Stat = ({ label, value, icon: Icon }) => (
  <HStack
    alignItems="center"
    space="sm"
    px="$4"
    py="$2"
    borderRadius="$xl"
    bg="$backgroundCardLight"
    sx={{ _dark: { bg: '$backgroundCardDark' } }}
    borderWidth={1}
    borderColor="$borderColorLight"
    sx={{ _dark: { borderColor: '$borderColorDark' } }}
    shadow="1"
  >
    <Icon size={16} />
    <Text
      fontSize="sm"
      color="$navbarTextColorLight"
      sx={{ _dark: { color: '$navbarTextColorDark' } }}
    >
      {label}:
    </Text>
    <Text
      fontSize="md"
      fontWeight="bold"
      color="$primaryTextLight"
      sx={{ _dark: { color: '$primaryTextDark' } }}
    >
      {value}
    </Text>
  </HStack>
)

export default BandwidthUsage
