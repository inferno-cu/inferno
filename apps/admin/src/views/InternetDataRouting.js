import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Pressable,
  useColorMode,
  Center
} from '@gluestack-ui/themed';

const SelectionMenu = () => {
  const { colorMode } = useColorMode();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 'cellular', label: 'Cellular then Satellite' },
    { id: 'wifi', label: 'Satellite then Cellular' },
    { id: 'satellite', label: 'Signal Strength' }
  ];

  const handleSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <VStack space="md" width="100%">
      <Text fontSize="$xl" fontWeight="bold" mb="$2">
        Select Data Routing:
      </Text>
      
      {options.map((option) => (
        <Pressable
          key={option.id}
          onPress={() => handleSelect(option.id)}
        >
          {({ pressed }) => (
            <Box
              bg={
                selectedOption === option.id
                  ? colorMode === 'light' 
                    ? '$blue200' 
                    : '$blue800'
                  : colorMode === 'light'
                    ? '$coolGray100'
                    : '$coolGray800'
              }
              borderWidth={1}
              borderColor={
                selectedOption === option.id
                  ? '$blue500'
                  : colorMode === 'light'
                    ? '$coolGray300'
                    : '$coolGray700'
              }
              borderRadius="$lg"
              p="$4"
              opacity={pressed ? 0.8 : 1}
              transform={[{ scale: pressed ? 0.98 : 1 }]}
              transition="100ms"
            >
              <HStack alignItems="center" space="md">
                <Box
                  width="$4"
                  height="$4"
                  borderRadius="$full"
                  borderWidth={2}
                  borderColor={
                    selectedOption === option.id
                      ? '$blue500'
                      : colorMode === 'light'
                        ? '$coolGray400'
                        : '$coolGray500'
                  }
                  bg={
                    selectedOption === option.id
                      ? '$blue500'
                      : 'transparent'
                  }
                />
                <Text fontSize="$md">
                  {option.label}
                </Text>
              </HStack>
            </Box>
          )}
        </Pressable>
      ))}
    </VStack>
  );
};

const InternetDataRouting = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? '$backgroundLight100' : '$backgroundDark900';

  return (
    <Center flex={1} p="$4">
      <Box width="100%" maxWidth={500}>
        <Text fontSize="$2xl" fontWeight="bold" mb="$6">
          Internet Data Routing
        </Text>
        <SelectionMenu />
        
        {/* You can add additional content or status messages here */}
      </Box>
    </Center>
  );
};

export default InternetDataRouting;