import React from 'react'
import PropTypes from 'prop-types'
import { HStack, Link, VStack, Text } from '@gluestack-ui/themed'
import {
  FaFileAlt,
  FaProjectDiagram,
  FaGithub
} from 'react-icons/fa'
import { MdSlideshow } from 'react-icons/md';


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

  const iconBaseStyle = {
    fontSize: 58,
    color: '#f97316',
    transition: 'transform 0.2s ease-in-out'
  }

  const hoverStyle = {
    transform: 'scale(1.2)'
  }

  return (
    <VStack
      w="100%"
      py="$4"
      space="lg"
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
      <HStack space="2xl" flexWrap="wrap" justifyContent="center">
        <Link
          isExternal
          href="http://slides.infernet.work"
          style={{ ...iconBaseStyle }}
          _hover={{ style: hoverStyle }}
        >
          <MdSlideshow style={iconBaseStyle} />
        </Link>
        <Link
          isExternal
          href="https://docs.infernet.work"
          style={{ ...iconBaseStyle }}
          _hover={{ style: hoverStyle }}
        >
          <FaFileAlt style={iconBaseStyle} />
        </Link>
        <Link
          isExternal
          href="https://arch.infernet.work"
          style={{ ...iconBaseStyle }}
          _hover={{ style: hoverStyle }}
        >
          <FaProjectDiagram style={iconBaseStyle} />
        </Link>
        <Link
          isExternal
          href="https://github.com/inferno-cu"
          style={{ ...iconBaseStyle }}
          _hover={{ style: hoverStyle }}
        >
          <FaGithub style={iconBaseStyle} />
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
