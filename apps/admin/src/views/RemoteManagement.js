import React, { useState } from 'react'
import {
  Box,
  Text,
  VStack,
  HStack,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectItem,
  ChevronDownIcon,
  Switch,
  Button,
  ButtonText,
  ScrollView,
  useColorMode
} from '@gluestack-ui/themed'

const intervalOptions = ['1 minute', '5 minutes', '15 minutes', '30 minutes', '1 hour']

const RowItem = ({ label, toggleValue, onToggle, intervalValue, setIntervalValue, buttonLabel }) => {
  return (
    <HStack
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      space="md"
      width="100%"
    >
      {/* Toggle & Label */}
      <HStack space="sm" alignItems="center" minWidth={260}>
        <Switch value={toggleValue} onValueChange={onToggle} />
        <Text size="sm" color="$text700">{label}</Text>
      </HStack>

      {/* Interval + Action Button */}
      <HStack space="md" alignItems="center">
        <Select
          selectedValue={intervalValue}
          onValueChange={setIntervalValue}
          minWidth={150}
        >
          <SelectTrigger variant="outline" size="sm">
            <SelectInput />
            <SelectIcon><ChevronDownIcon /></SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            {intervalOptions.map((opt) => (
              <SelectItem key={opt} label={opt} value={opt} />
            ))}
          </SelectPortal>
        </Select>

        <Button size="sm" variant="outline">
          <ButtonText>{buttonLabel}</ButtonText>
        </Button>
      </HStack>
    </HStack>
  )
}

const RemoteManagement = () => {
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? '$backgroundCardLight' : '$backgroundCardDark'
  const border = colorMode === 'light' ? '$coolGray200' : '$coolGray700'

  const [toggles, setToggles] = useState({
    position: true,
    remote: true,
    status: true,
    call: true,
    usage: true
  })

  const [intervals, setIntervals] = useState({
    position: '1 minute',
    remote: '1 minute',
    status: '1 minute',
    call: '1 minute',
    usage: '1 hour',
    config: '1 hour'
  })

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
            Remote Management
          </Text>

          <VStack space="xl">
            <RowItem
              label="Position Reports Enabled"
              toggleValue={toggles.position}
              onToggle={(val) => setToggles({ ...toggles, position: val })}
              intervalValue={intervals.position}
              setIntervalValue={(val) => setIntervals({ ...intervals, position: val })}
              buttonLabel="Send"
            />
            <RowItem
              label="Remote Management Enabled"
              toggleValue={toggles.remote}
              onToggle={(val) => setToggles({ ...toggles, remote: val })}
              intervalValue={intervals.remote}
              setIntervalValue={(val) => setIntervals({ ...intervals, remote: val })}
              buttonLabel="Run"
            />
            <RowItem
              label="Status Reports Enabled"
              toggleValue={toggles.status}
              onToggle={(val) => setToggles({ ...toggles, status: val })}
              intervalValue={intervals.status}
              setIntervalValue={(val) => setIntervals({ ...intervals, status: val })}
              buttonLabel="Send"
            />
            <RowItem
              label="Call History Enabled"
              toggleValue={toggles.call}
              onToggle={(val) => setToggles({ ...toggles, call: val })}
              intervalValue={intervals.call}
              setIntervalValue={(val) => setIntervals({ ...intervals, call: val })}
              buttonLabel="Send"
            />
            <RowItem
              label="Usage Upload Enabled"
              toggleValue={toggles.usage}
              onToggle={(val) => setToggles({ ...toggles, usage: val })}
              intervalValue={intervals.usage}
              setIntervalValue={(val) => setIntervals({ ...intervals, usage: val })}
              buttonLabel="Upload"
            />

            {/* Config Sync Row */}
            <HStack justifyContent="flex-end" alignItems="center" space="md">
              <Text size="sm" color="$text700">
                Configuration Sync Interval:
              </Text>

              <Select
                selectedValue={intervals.config}
                onValueChange={(val) => setIntervals({ ...intervals, config: val })}
                minWidth={150}
              >
                <SelectTrigger variant="outline" size="sm">
                  <SelectInput />
                  <SelectIcon><ChevronDownIcon /></SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  {intervalOptions.map((opt) => (
                    <SelectItem key={opt} label={opt} value={opt} />
                  ))}
                </SelectPortal>
              </Select>

              <Button size="sm" variant="outline">
                <ButtonText>Sync</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Save/Cancel Actions */}
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

export default RemoteManagement
