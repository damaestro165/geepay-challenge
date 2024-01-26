import { Avatar, Box, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import MenuDrawer from './MenuDrawer'
import Logo from '../assets/Vector.png'
import SearchIcon from '../assets/icons/SearchIcon'
import NotificationIcon from '../assets/icons/NotificationIcon'
import CalenderIcon from '../assets/icons/CalenderIcon'
import ProfileImage from '../assets/profile.jpeg'

const ResponsiveTopBar = () => {
  return (
   <Box className='flex lg:hidden gap-2 items-center justify-center p-3 border-b  border-b-zinc-300 bg-neutral-50  w-full'>
    <Box className='w-[6%]'>
    <MenuDrawer/>
    </Box>
    <Box className='flex gap-2 w-[44%] items-center '>
      <Image
            boxSize='100px'
            src={Logo}
            alt='Logo'
            w=  "30px" 
            h= "30px"
          
      />
      <Text className=''>DashBoard</Text>
     </Box>
      <Box className='flex justify-evenly items-center w-[40%]'>
      <IconButton
      size='sm'
          icon={  <Icon as={SearchIcon}  boxSize={5} /> }
          _hover={{
                  border: '1px'
          }}
          backgroundColor='rgb(250 250 250)'
          aria-label='Nav Button'
       />
      <IconButton 
          size='sm'
          icon={  <Icon as={CalenderIcon}  boxSize={5} /> }
          _hover={{
                  border: '1px'
          }}
          backgroundColor='rgb(250 250 250)'
          aria-label='Nav Button'
      />
      <IconButton 
           size='sm'
          icon={  <Icon as={NotificationIcon}   boxSize={5} /> }
          _hover={{
                  border: '1px'
          }}
          backgroundColor='rgb(250 250 250)'
          aria-label='Nav Button'
        
      />
      <Avatar size='sm'  src={ProfileImage}/>
      </Box>
   </Box>
  )
}

export default ResponsiveTopBar