import React, { useState } from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  Switch,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectItem,
  ChevronDownIcon,
  Button,
  ButtonText,
  useColorMode,
  ScrollView
} from '@gluestack-ui/themed'

const SerialToIPSettings = () => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'

  const [enabled, setEnabled] = useState(false)
  const [baudRate, setBaudRate] = useState('115200')
  const [flowControl, setFlowControl] = useState('None')

  const baudOptions = ['9600', '19200', '38400', '57600', '115200']
  const flowOptions = ['None', 'XON/XOFF', 'RTS/CTS', 'DSR/DTR']

  return (
    <ScrollView px="$6" py="$6" minHeight="100%" width="100%">
      <VStack space="lg" maxWidth={1000} alignSelf="center" width="100%">
        <Box
          borderWidth={1}
          borderRadius="$xl"
          borderColor={border}
          bg={bg}
          p="$6"
        >
          <Text fontSize="$xl" fontWeight="bold" mb="$6" color="$text900">
            Serial Port
          </Text>

          <VStack space="xl">
            {/* Enabled */}
            <HStack justifyContent="space-between" alignItems="center" flexWrap="wrap">
              <Text size="sm" color="$text700">Enabled:</Text>
              <Switch value={enabled} onValueChange={setEnabled} />
            </HStack>

            {/* Baud Rate */}
            <HStack justifyContent="space-between" alignItems="center" flexWrap="wrap">
              <Text size="sm" color="$text700">Baud Rate:</Text>
              <Select
                selectedValue={baudRate}
                onValueChange={setBaudRate}
                minWidth={180}
              >
                <SelectTrigger variant="outline" size="sm">
                  <SelectInput />
                  <SelectIcon><ChevronDownIcon /></SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  {baudOptions.map((rate) => (
                    <SelectItem key={rate} label={rate} value={rate} />
                  ))}
                </SelectPortal>
              </Select>
            </HStack>

            {/* Flow Control */}
            <HStack justifyContent="space-between" alignItems="center" flexWrap="wrap">
              <Text size="sm" color="$text700">Flow Control:</Text>
              <Select
                selectedValue={flowControl}
                onValueChange={setFlowControl}
                minWidth={180}
              >
                <SelectTrigger variant="outline" size="sm">
                  <SelectInput />
                  <SelectIcon><ChevronDownIcon /></SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  {flowOptions.map((opt) => (
                    <SelectItem key={opt} label={opt} value={opt} />
                  ))}
                </SelectPortal>
              </Select>
            </HStack>
          </VStack>
        </Box>

        {/* Buttons */}
        <HStack justifyContent="flex-end" space="md">
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

export default SerialToIPSettings
