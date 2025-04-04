import React from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  ScrollView,
  useColorMode
} from '@gluestack-ui/themed'
import { PhoneIcon } from 'lucide-react-native'

const Card = ({ title, children }) => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardtDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'
  const divider = colorMode === 'light' ? 'black' : '$white'

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
        <HStack alignItems="center" space="sm" mb="$4">
          <PhoneIcon size={20} color="currentColor" />
          <Text fontSize="$lg" fontWeight="600" color="$primary600">
            {title}
          </Text>
        </HStack>
      )}
      {children}
    </Box>
  )
}

const CallRow = ({ call }) => (
  <HStack
    py="$2"
    px="$2"
    borderBottomWidth={1}
    borderBottomColor= "$divider"
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
  >
    <Text flex={1} size="sm" color="$text600">{call.date}</Text>
    <Text flex={1} size="sm" color="$text600" textAlign="center">{call.source}</Text>
    <Text flex={1} size="sm" color="$text600" textAlign="center">{call.destination}</Text>
    <Text flex={1} size="sm" color="$text600" textAlign="center">{call.line}</Text>
    <Text flex={1} size="sm" color="$text600" textAlign="center">{call.totalDuration}</Text>
    <Text flex={1} size="sm" color="$text600" textAlign="center">{call.billableDuration}</Text>
    <Text flex={1} size="sm" color="$text600" textAlign="center">{call.disposition}</Text>
    <Text flex={1} size="sm" color="$text600" textAlign="right">{call.callId}</Text>
  </HStack>
)

const CallHistory = () => {
  const dummyCalls = [
    {
      date: '2025-04-01 12:30',
      source: '+1234567890',
      destination: '+1987654321',
      line: 'Line 1',
      totalDuration: '03:45',
      billableDuration: '03:00',
      disposition: 'Completed',
      callId: 'ABC123'
    },
    {
      date: '2025-04-01 10:15',
      source: '+1234567890',
      destination: '+1987654321',
      line: 'Line 2',
      totalDuration: '00:10',
      billableDuration: '00:00',
      disposition: 'Missed',
      callId: 'XYZ987'
    }
  ]

  return (
    <ScrollView px="$6" py="$6" width="100%" minHeight="100%">
      <VStack space="lg" maxWidth={1600} alignSelf="center" width="100%">
        <Card title="Call History">
          <HStack
            px="$2"
            pb="$2"
            justifyContent="space-between"
            borderBottomWidth={1}
            borderBottomColor="$borderColorLight"
          >
            <Text flex={1} size="sm" fontWeight="600" color="$text800">Date</Text>
            <Text flex={1} size="sm" fontWeight="600" textAlign="center" color="$text800">Source</Text>
            <Text flex={1} size="sm" fontWeight="600" textAlign="center" color="$text800">Destination</Text>
            <Text flex={1} size="sm" fontWeight="600" textAlign="center" color="$text800">Line</Text>
            <Text flex={1} size="sm" fontWeight="600" textAlign="center" color="$text800">Duration</Text>
            <Text flex={1} size="sm" fontWeight="600" textAlign="center" color="$text800">Billable Duration</Text>
            <Text flex={1} size="sm" fontWeight="600" textAlign="center" color="$text800">Disposition</Text>
            <Text flex={1} size="sm" fontWeight="600" textAlign="right" color="$text800">Call ID</Text>
          </HStack>

          {dummyCalls.length === 0 ? (
            <Text textAlign="center" mt="$4" color="$muted500">
              No calls to display.
            </Text>
          ) : (
            dummyCalls.map((call, idx) => <CallRow key={idx} call={call} />)
          )}
        </Card>
      </VStack>
    </ScrollView>
  )
}

export default CallHistory

