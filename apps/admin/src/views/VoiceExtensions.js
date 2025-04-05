import React from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  ScrollView,
  Select,
  SelectItem,
  useColorMode,
  Pressable,
  Icon
} from '@gluestack-ui/themed'
import { Pencil } from 'lucide-react-native'

const dataSIP = [
  { ext: '510', user: '510', pass: '510' },
  { ext: '511', user: '511', pass: '511' },
  { ext: '512', user: '512', pass: '512' },
  { ext: '513', user: '513', pass: '513' },
  { ext: '514', user: '514', pass: '514' },
  { ext: '515', user: '515', pass: '515' },
  { ext: '516', user: '516', pass: '516' },
  { ext: '517', user: '517', pass: '517' },
  { ext: '518', user: '518', pass: '518' }
]

const dataPOTS = [
  { line: '1', ext: '500', desc: 'POTS #1' },
  { line: '2', ext: '501', desc: 'POTS #2' }
]

const TableHeader = ({ columns }) => (
  <HStack px="$4" py="$2" bg="$coolGray800">
    {columns.map((col, idx) => (
      <Text flex={1} color="$text50" fontWeight="bold" key={idx}>{col}</Text>
    ))}
    <Text w={8}></Text>
  </HStack>
)

const SipRow = ({ item }) => (
  <HStack px="$4" py="$3" borderBottomWidth={1} borderColor="$borderColor">
    <Text flex={1}>{item.ext}</Text>
    <Text flex={1}>-</Text>
    <HStack flex={1} space="xs"><Tag>Line 1</Tag><Tag>Line 2</Tag></HStack>
    <Text flex={1}>Any Available</Text>
    <Text flex={1}>{item.user}</Text>
    <Text flex={1}>{item.pass}</Text>
    <Pressable><Icon as={Pencil} size={16} /></Pressable>
  </HStack>
)

const PotsRow = ({ item }) => (
  <HStack px="$4" py="$3" borderBottomWidth={1} borderColor="$borderColor">
    <Text flex={1}>{item.line}</Text>
    <Text flex={1}>{item.ext}</Text>
    <Text flex={1}>N/A</Text>
    <Text flex={1}>{item.desc}</Text>
    <HStack flex={1} space="xs"><Tag>Line 1</Tag><Tag>Line 2</Tag></HStack>
    <Tag>Line 1</Tag>
    <Pressable><Icon as={Pencil} size={16} /></Pressable>
  </HStack>
)

const Tag = ({ children }) => (
  <Box bg="$coolGray700" px="$2" py="$1" borderRadius="$lg">
    <Text size="xs" color="$text50">{children}</Text>
  </Box>
)

const VoiceExtensions = () => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'

  return (
    <ScrollView px="$4" py="$8" minHeight="100%" contentContainerStyle={{ alignItems: 'center' }}>
      <VStack width="100%" maxWidth={1200} space="lg">
        <Box bg={bg} borderRadius="$2xl" borderWidth={1} borderColor={border}>
          <Text px="$4" py="$3" fontWeight="700" size="xl" color="$primary600">SIP Extensions</Text>
          <TableHeader columns={["Extension", "Description", "Inbound Line(s)", "Outbound Line", "Username", "Password", "Actions"]} />
          {dataSIP.map((item, i) => <SipRow key={i} item={item} />)}
        </Box>

        <Box bg={bg} borderRadius="$2xl" borderWidth={1} borderColor={border}>
          <HStack justifyContent="space-between" alignItems="center" px="$4" py="$3">
            <Text fontWeight="700" size="xl" color="$primary600">POTS Extensions</Text>
            <Select width={200}>
              <SelectItem label="USA / Canada" value="us" />
            </Select>
          </HStack>
          <TableHeader columns={["Line", "Extension", "Type", "Description", "Inbound Line(s)", "Outbound Line", "Actions"]} />
          {dataPOTS.map((item, i) => <PotsRow key={i} item={item} />)}
        </Box>
      </VStack>
    </ScrollView>
  )
}

export default VoiceExtensions
