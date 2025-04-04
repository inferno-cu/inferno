import React from 'react'
import StatsWidget from './StatsWidget'
import { Phone } from 'lucide-react-native'
import { AlertContext } from 'AppContext'

export const MakeCall = () => {
  return (
    <StatsWidget
      
      icon={Phone}
      iconColor="$orange400"
      title="Make Call"
      text={"Weak"} 
      textFooter="Connected"
    />
  )
}

export default MakeCall
