import React, { useState } from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  ScrollView,
  useColorMode,
  Button,
  ButtonText,
  Input,
  InputField,
  Link
} from '@gluestack-ui/themed'
import { UploadCloud, RefreshCcw, Trash2 } from 'lucide-react-native'

const Advanced = () => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'
  const textColor = colorMode === 'light' ? '$text700' : '$text200'
  const fileBg = colorMode === 'light' ? '$coolGray100' : '$coolGray800'

  const [configFile, setConfigFile] = useState(null)
  const [firmwareFile, setFirmwareFile] = useState(null)

  return (
    <ScrollView px="$6" py="$6" width="100%" minHeight="100%">
      <VStack space="lg" maxWidth={1200} alignSelf="center" width="100%">
        {/* Backup / Restore */}
        <Box bg={bg} borderRadius="$xl" p="$6" borderWidth={1} borderColor={border}>
          <HStack justifyContent="space-between" mb="$4" alignItems="center">
            <Text size="xl" fontWeight="700" color="$primary600">
              Backup/Restore Configuration
            </Text>
            <Button size="sm" bg="$blue600">
              <ButtonText>Download Configuration</ButtonText>
            </Button>
          </HStack>
          <HStack space="md" alignItems="center">
            <Input flex={1} bg={fileBg} isReadOnly>
              <InputField placeholder="Choose file..." value={configFile?.name || ''} />
            </Input>
            <Button
              bg="$rose700"
              onPress={() => {
                // Trigger hidden input
                document.getElementById('configUpload').click()
              }}
            >
              <ButtonText>Upload Configuration File</ButtonText>
            </Button>
            <input
              type="file"
              id="configUpload"
              style={{ display: 'none' }}
              onChange={(e) => setConfigFile(e.target.files[0])}
            />
          </HStack>
        </Box>

        {/* System Update */}
        <Box bg={bg} borderRadius="$xl" p="$6" borderWidth={1} borderColor={border}>
          <Text size="xl" fontWeight="700" color="$primary600" mb="$4">
            System Update
          </Text>

          {/* Check for Updates */}
          <HStack justifyContent="space-between" alignItems="center" mb="$6" flexWrap="wrap">
            <Text size="md" fontWeight="600" color={textColor}>
              Check for Updates
            </Text>
            <Button bg="$blue600" variant="solid">
              <HStack space="sm" alignItems="center">
                <RefreshCcw size={16} color="white" />
                <ButtonText>Check for Updates</ButtonText>
              </HStack>
            </Button>
          </HStack>

          {/* Manual Upload */}
          <Text size="md" fontWeight="600" color={textColor} mb="$2">
            Manual Upload
          </Text>
          <HStack space="md" alignItems="center">
            <Input flex={1} bg={fileBg} isReadOnly>
              <InputField placeholder="Select Update File..." value={firmwareFile?.name || ''} />
            </Input>
            <Button
              bg="$rose700"
              onPress={() => {
                document.getElementById('firmwareUpload').click()
              }}
            >
              <ButtonText>Upload Firmware</ButtonText>
            </Button>
            <input
              type="file"
              id="firmwareUpload"
              style={{ display: 'none' }}
              onChange={(e) => setFirmwareFile(e.target.files[0])}
            />
          </HStack>
        </Box>

        {/* Factory Reset */}
        <Box>
          <Button variant="outline" borderColor="$rose700" onPress={() => alert('Factory Reset initiated')}>
            <HStack alignItems="center" space="sm">
              <Trash2 size={16} color="#e11d48" />
              <ButtonText color="$rose700">Factory Reset</ButtonText>
            </HStack>
          </Button>
        </Box>
      </VStack>
    </ScrollView>
  )
}

export default Advanced
