import React from 'react'
import PropTypes from 'prop-types'
import { HStack, Link, LinkText, Text, VStack, Box } from '@gluestack-ui/themed'

function Footer(props) {
  const year = new Date().getFullYear()

  const glowText = {
    fontWeight: '700',
    size: 'sm',
    textShadow: '0 0 1px #ffb300, 0 0 2px #ffcc00, 0 0 4px #ffd700',
    bgGradient: 'linear(to-r, #ffb300, #ffd700)',
    bgClip: 'text',
    color: 'transparent',
    letterSpacing: 0.5,
    transition: 'all 0.15s ease-in-out',
    _hover: {
      textShadow: '0 0 2px #ffcc00, 0 0 4px #ffd700, 0 0 6px #ffee00'
    }
  }

  const regText = {
    
    fontWeight: '700',
    size: 'sm',
    color: '#f97316',
    letterSpacing: 0.5,
    textDecorationLine: 'none' 

  }

  const pillBox = {
    px: '$3',
    py: '$1',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#f97316', // 🔶 Bright golden yellow border
    backgroundColor: '#1c1917', // 🔥 Dark charcoal brown to contrast the gold
    shadowColor: '#fde047',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <VStack
      w="100%"
      py="$4"
      space="md"
      bg={{
        linearGradient: {
          colors: ['#0a0a0a', '#140000'],
          start: [0, 0],
          end: [1, 1]
        }
      }}
      borderTopWidth={0}
      borderTopColor="#ffcc00"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <HStack space="lg" flexWrap="wrap" justifyContent="center">
        <Link isExternal href="http://infernet.work">
          <Box sx={pillBox}>
            <LinkText sx={regText}>Infernet</LinkText>
          </Box>
        </Link>
        <Link isExternal href="https://docs.infernet.work">
          <Box sx={pillBox}>
            <LinkText sx={regText}>Docs</LinkText>
          </Box>
        </Link>
        <Link isExternal href="https://arch.infernet.work">
          <Box sx={pillBox}>
            <LinkText sx={regText}>Architecture</LinkText>
          </Box>
        </Link>
        <Link isExternal href="https://github.com/inferno-cu">
          <Box sx={{pillBox, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <img src='GitHub_Invertocat_Light.png' alt="github logo" style={{ width: 16, height: 16 }} />
            <LinkText sx={regText}>GitHub</LinkText>
          </Box>
        </Link>
      </HStack>

      <Text
        {...glowText}
        size="xs"
        textAlign="center"
        pt="$2"
        textShadow="0 0 1px #ffb300, 0 0 2px #ffd700"
      >
        &copy; {year} Inferno – Forged in Code, Fueled by Fire 🔥
      </Text>
    </VStack>
  )
}

Footer.propTypes = {
  color: PropTypes.string
}

export default Footer
