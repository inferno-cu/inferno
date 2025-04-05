import React from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  Input,
  InputField,
  ScrollView,
  Switch,
  Button,
  ButtonText,
  useColorMode
} from '@gluestack-ui/themed'

const GeneralSettings = () => {
  const { colorMode } = useColorMode()
  const cardBg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardDark'
  const cardBorder = colorMode === 'light' ? '$coolGray200' : '$coolGray700'
  const inputBg = colorMode === 'light' ? '$white' : '$coolGray900'

  return (
    <ScrollView px="$6" py="$6" width="100%" minHeight="100%">
      <VStack space="lg" maxWidth={1400} alignSelf="center" width="100%">
        {/* SkyLink Card */}
        <Box
          borderWidth={1}
          borderRadius="$xl"
          borderColor={cardBorder}
          bg={cardBg}
          p="$6"
        >
          <Text fontSize="$xl" fontWeight="bold" mb="$4" color="$text900">
            SkyLink
          </Text>

          <HStack space="lg" alignItems="center" flexWrap="wrap">
            <VStack flex={1} minWidth="300px">
              <Text size="sm" color="$text700" mb="$1">
                Asset Tag
              </Text>
              <Input bg={inputBg}>
                <InputField placeholder="Enter tag..." />
              </Input>
            </VStack>

            <VStack flex={1} minWidth="300px">
              <Text size="sm" color="$text700" mb="$1">
                Max Daily Usage
              </Text>
              <Input bg={inputBg}>
                <InputField placeholder="Enter bytes..." />
              </Input>
            </VStack>

            <Button mt="$6" alignSelf="flex-start" size="md" variant="outline">
              <ButtonText>Change Password</ButtonText>
            </Button>
          </HStack>
        </Box>

        {/* Satellite Card */}
        <Box
          borderWidth={1}
          borderRadius="$xl"
          borderColor={cardBorder}
          bg={cardBg}
          p="$6"
        >
          <Text fontSize="$xl" fontWeight="bold" mb="$4" color="$text900">
            Satellite
          </Text>

          <HStack space="lg" alignItems="center" flexWrap="wrap">
            <HStack space="md" alignItems="center">
              <Text color="$text700">Satellite Enabled:</Text>
              <Switch size="md" />
            </HStack>
            <HStack space="md" alignItems="center">
              <Text color="$text700">Data Enabled:</Text>
              <Switch size="md" />
            </HStack>
          </HStack>
        </Box>

        {/* WiFi and Cellular */}
        <HStack space="lg" flexWrap="wrap">
          {/* WiFi */}
          <Box
            flex={1}
            minWidth="350px"
            borderWidth={1}
            borderRadius="$xl"
            borderColor={cardBorder}
            bg={cardBg}
            p="$6"
          >
            <Text fontSize="$xl" fontWeight="bold" mb="$4" color="$text900">
              WiFi
            </Text>

            <VStack space="md">
              {[
                ['SSID', 'SKYLINK-YOW-A'],
                ['Mode', '2.4 GHz'],
                ['Channel', 'Auto'],
                ['Security', 'WPA2-PSK'],
                ['Password', '********']
              ].map(([label, value], idx) => (
                <VStack key={idx}>
                  <Text size="sm" color="$text700" mb="$1">
                    {label}
                  </Text>
                  <Input bg={inputBg}>
                    <InputField defaultValue={value} />
                  </Input>
                </VStack>
              ))}

              <Box alignSelf="center" mt="$4">
                {/* Placeholder for QR */}
                <Box
                  width={100}
                  height={100}
                  bg="$coolGray300"
                  borderRadius="$md"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="$text700" fontSize="$xs">QR Code</Text>
                </Box>
                <Text mt="$2" textAlign="center" fontSize="$sm" color="$primary600">
                  Scan to Connect
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Cellular */}
          <Box
            flex={1}
            minWidth="350px"
            borderWidth={1}
            borderRadius="$xl"
            borderColor={cardBorder}
            bg={cardBg}
            p="$6"
          >
            <Text fontSize="$xl" fontWeight="bold" mb="$4" color="$text900">
              Cellular
            </Text>

            <VStack space="md">
              {[
                ['APN', 'gigsky'],
                ['Username', 'Optional'],
                ['Password', 'Optional'],
                ['IMEI', '869710031132206'],
                ['SIM', '89104100000021647139'],
                ['Network', 'ROGERS']
              ].map(([label, value], idx) => (
                <VStack key={idx}>
                  <Text size="sm" color="$text700" mb="$1">
                    {label}
                  </Text>
                  <Input bg={inputBg}>
                    <InputField defaultValue={value} />
                  </Input>
                </VStack>
              ))}
            </VStack>
          </Box>
        </HStack>

        {/* Footer Actions */}
        <HStack space="lg" justifyContent="flex-end" mt="$4">
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

export default GeneralSettings
