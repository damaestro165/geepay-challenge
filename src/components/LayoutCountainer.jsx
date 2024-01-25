import React from 'react'
import TopBar from './TopBar'
import { Box } from '@chakra-ui/react'
import ResponsiveTopBar from './ResponsiveTopBar'

const LayoutCountainer = ({}) => {
  return (
    <Box className='w-full'>
      <TopBar/>
      <ResponsiveTopBar/>
    </Box>
  )
}

export default LayoutCountainer