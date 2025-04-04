import { RadioTower, SatelliteDishIcon } from 'lucide-react-native'
import React from 'react'
import StatsWidget from './StatsWidget'
import { Box, Text } from '@gluestack-ui/themed'

export const CellularStatus = () => {
  return (
    <StatsWidget
      icon={RadioTower}
      iconColor="$yellow400"
      title="Cellular Connection Status"
      text ="Connected"
    />
  )
}

export const SateliteStatus = () => {
  return (
    <StatsWidget
      icon={SatelliteDishIcon}
      iconColor="$blue500"
      title="Satelite Connection Status"
      text ="Not Connected"
    />
  )
}

