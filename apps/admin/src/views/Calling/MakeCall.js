import React, { useState } from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  ButtonText,
  ScrollView,
  Pressable,
  useColorMode,
  Icon
} from '@gluestack-ui/themed'
import { PhoneIcon, DeleteIcon, SatelliteDish, Signal } from 'lucide-react-native'

const DialButton = ({ label, onPress, colorMode }) => (
  <Pressable onPress={onPress}>
    {({ pressed }) => (
      <Box
        bg={colorMode === 'light' ? '$coolGray100' : '$coolGray800'}
        borderRadius="$xl"
        width={90}
        height={90}
        justifyContent="center"
        alignItems="center"
        shadowColor="$black"
        shadowOpacity={colorMode === 'light' ? 0.1 : 0.3}
        shadowRadius={4}
        opacity={pressed ? 0.8 : 1}
        transform={[{ scale: pressed ? 0.95 : 1 }]}
        transition="100ms"
      >
        <Text 
          size="4xl" 
          color={colorMode === 'light' ? '$coolGray900' : '$text50'} 
          fontWeight="bold"
        >
          {label}
        </Text>
      </Box>
    )}
  </Pressable>
)

const MakeCall = () => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardtDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray800'
  const textColor = colorMode === 'light' ? '$coolGray800' : '$coolGray100'
  const inputBg = colorMode === 'light' ? '$coolGray50' : '$coolGray900'
  const inputBorder = colorMode === 'light' ? '$coolGray300' : '$coolGray700'

  const [phone, setPhone] = useState('')
  const [method, setMethod] = useState('satellite')
  const [status, setStatus] = useState('')

  const handleDigit = (digit) => {
    if (phone.length < 15) setPhone(phone + digit)
  }

  const handleBackspace = () => {
    setPhone(phone.slice(0, -1))
  }

  const handleCall = () => {
    if (!phone) return setStatus('⚠️ Enter a phone number.')
  
    const methodIcon = method === 'satellite' ? '📡' : '📞'
    setStatus(`${methodIcon} Calling ${phone} via ${method}...`)
  
    setTimeout(() => {
      setStatus(`✅ Connected to ${phone} via ${method}`)
    }, 1500)
  }

  const toggleMethod = () => {
    setMethod((prev) => (prev === 'satellite' ? 'cellular' : 'satellite'))
  }

  return (
    <ScrollView 
      px="$4" 
      py="$8" 
      minHeight="100%" 
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <Box
        bg={bg}
        borderColor={border}
        borderWidth={1}
        borderRadius="$3xl"
        p="$6"
        width="100%"
        maxWidth={500}
        shadowColor="$black"
        shadowOpacity={colorMode === 'light' ? 0.05 : 0.2}
        shadowRadius={10}
        alignItems="center"
      >
        <Text fontSize="$4xl" fontWeight="700" mb="$4" color={colorMode === 'light' ? '$coolGray90' : '$white'}>
          Dial a Number
        </Text>

        {/* Display Field */}
        <HStack
          borderWidth={1}
          borderRadius="$lg"
          px="$4"
          py="$3"
          borderColor={inputBorder}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          bg={inputBg}
          mb="$6"
        >
          <Text fontSize="$xl" color={textColor} fontFamily="$mono">
            {phone || 'Enter number'}
          </Text>
          <Pressable onPress={handleBackspace}>
            <DeleteIcon size={20} color={colorMode === 'light' ? '#666' : '#aaa'} />
          </Pressable>
        </HStack>

        {/* Dialpad */}
        <VStack space="lg">
          {[
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['*', '0', '#']
          ].map((row, idx) => (
            <HStack key={idx} space="xl" justifyContent="center">
              {row.map((digit) => (
                <DialButton 
                  key={digit} 
                  label={digit} 
                  onPress={() => handleDigit(digit)} 
                  colorMode={colorMode}
                />
              ))}
            </HStack>
          ))}
        </VStack>

        {/* Actions */}
        <HStack mt="$8" space="lg" alignItems="center">
          <Button 
            variant="outline" 
            onPress={toggleMethod} 
            size="lg"
            borderColor={colorMode === 'light' ? '$coolGray300' : '$coolGray600'}
          >
            <HStack space="sm" alignItems="center">
              <Icon
                as={method === 'satellite' ? SatelliteDish : Signal}
                color={colorMode === 'light' ? '$coolGray700' : '$coolGray300'}
                size="md"
              />
              <ButtonText color={colorMode === 'light' ? '$coolGray800' : '$coolGray100'}>
                {method === 'satellite' ? 'Satellite' : 'Cellular'}
              </ButtonText>
            </HStack>
          </Button>

          <Button 
            size="lg" 
            onPress={handleCall}
            bg={colorMode === 'light' ? '$green600' : '$green700'}
            _pressed={{ bg: colorMode === 'light' ? '$green700' : '$green800' }}
          >
            <HStack space="sm" alignItems="center">
              <PhoneIcon size={18} color="white" />
              <ButtonText>Call</ButtonText>
            </HStack>
          </Button>
        </HStack>

        {status && (
          <Text 
            textAlign="center" 
            size="sm" 
            color={colorMode === 'light' ? '$coolGray600' : '$coolGray400'} 
            mt="$4"
          >
            {status}
          </Text>
        )}
      </Box>
    </ScrollView>
  )
}

export default MakeCall