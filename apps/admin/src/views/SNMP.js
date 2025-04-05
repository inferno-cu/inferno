import React, { useState } from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  Input,
  InputField,
  Switch,
  Button,
  ButtonText,
  Pressable,
  useColorMode,
  ScrollView
} from '@gluestack-ui/themed'

const SNMP = () => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'

  const [enabled, setEnabled] = useState(true)
  const [readOnly, setReadOnly] = useState('snmp_ro')
  const [readWrite, setReadWrite] = useState('snmp_rw')

  return (
    <ScrollView px="$4" py="$8" minHeight="100%" contentContainerStyle={{ alignItems: 'center' }}>
      <Box
        width="100%"
        maxWidth={600}
        bg={bg}
        borderColor={border}
        borderWidth={1}
        borderRadius="$3xl"
        p="$6"
        shadowColor="$black"
        shadowOpacity={0.1}
        shadowRadius={10}
      >
        <HStack justifyContent="space-between" alignItems="center" mb="$6">
          <Text fontSize="$xl" fontWeight="700" color="$text900">
            SNMP
          </Text>
          <Switch value={enabled} onValueChange={setEnabled} />
        </HStack>

        <VStack space="lg">
          <VStack space="xs">
            <Text color="$text700" size="sm" fontWeight="500">Read Only Community:</Text>
            <Input variant="outline" size="md">
              <InputField
                placeholder="Enter read-only string"
                value={readOnly}
                onChangeText={setReadOnly}
              />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text color="$text700" size="sm" fontWeight="500">Read/Write Community:</Text>
            <Input variant="outline" size="md">
              <InputField
                placeholder="Enter read/write string"
                value={readWrite}
                onChangeText={setReadWrite}
              />
            </Input>
          </VStack>

          <Pressable onPress={() => console.log('Download MIBs')}>
            <Text
              size="sm"
              fontWeight="500"
              color="$blue700"
              underline
            >
              Download MIBs
            </Text>
          </Pressable>
        </VStack>

        <HStack justifyContent="flex-end" space="sm" mt="$8">
          <Button variant="outline" action="secondary">
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button>
            <ButtonText>Save</ButtonText>
          </Button>
        </HStack>
      </Box>
    </ScrollView>
  )
}

export default SNMP
