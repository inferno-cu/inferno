import React, { useState } from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  Select,
  SelectItem,
  Switch,
  ScrollView,
  Button,
  ButtonText,
  useColorMode
} from '@gluestack-ui/themed'

const Accessories = () => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'
  const labelColor = colorMode === 'light' ? '$text700' : '$text300'

  const [shutdownEnabled, setShutdownEnabled] = useState(false)
  const [emergencyEnabled, setEmergencyEnabled] = useState(false)
  const [interval, setInterval] = useState('1 minute')

  return (
    <ScrollView px="$6" py="$6" width="100%" minHeight="100%">
      <VStack space="lg" maxWidth={1200} alignSelf="center" width="100%">
        {/* Page Header */}
        <Box
          bg={bg}
          borderRadius="$xl"
          p="$6"
          borderWidth={1}
          borderColor={border}
        >
          <Text size="xl" fontWeight="700" color="$primary600" mb="$2">
            Accessories
          </Text>
          <Text size="sm" color={labelColor}>
            Some optional accessories for SkyLink have configuration settings. This is where you can manage those settings. 
            Remember, these accessories are optional, so unless you have one attached any changes to these settings won’t have any effect.
          </Text>
        </Box>

        {/* Battery Pack */}
        <Box
          bg={bg}
          borderRadius="$xl"
          p="$6"
          borderWidth={1}
          borderColor={border}
        >
          <Text size="lg" fontWeight="600" color="$primary600" mb="$4">
            Battery Pack
          </Text>
          <HStack justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <HStack space="md" alignItems="center" mb="$4">
              <Text color={labelColor} fontWeight="500">
                Shutdown Timer Enabled:
              </Text>
              <Switch value={shutdownEnabled} onToggle={setShutdownEnabled} />
            </HStack>
            <HStack space="md" flexWrap="wrap">
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
                <Box
                  key={label}
                  px="$5"
                  py="$3"
                  borderRadius="$md"
                  bg="$coolGray800"
                  minWidth={80}
                  alignItems="center"
                >
                  <Text color="$text100">{label}</Text>
                </Box>
              ))}
            </HStack>
          </HStack>
        </Box>

        {/* Emergency Button */}
        <Box
          bg={bg}
          borderRadius="$xl"
          p="$6"
          borderWidth={1}
          borderColor={border}
        >
          <Text size="lg" fontWeight="600" color="$primary600" mb="$4">
            Emergency Switch/Button
          </Text>
          <HStack justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <HStack space="md" alignItems="center" mb="$4">
              <Text color={labelColor} fontWeight="500">
                Emergency Reporting Enabled:
              </Text>
              <Switch value={emergencyEnabled} onToggle={setEmergencyEnabled} />
            </HStack>
            <HStack space="md" alignItems="center">
              <Text color={labelColor} fontWeight="500">
                Emergency Report Interval:
              </Text>
              <Select selectedValue={interval} onValueChange={setInterval}>
                {['1 minute', '5 minutes', '15 minutes'].map((val) => (
                  <SelectItem key={val} label={val} value={val} />
                ))}
              </Select>
            </HStack>
          </HStack>
        </Box>

        {/* Footer Buttons */}
        <HStack space="lg" justifyContent="flex-end">
          <Button variant="outline" size="md">
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button size="md">
            <ButtonText>Save</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </ScrollView>
  )
}

export default Accessories
