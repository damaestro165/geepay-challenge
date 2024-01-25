import { Button, Box, Icon, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import SideBar from './SideBar'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'


const MenuDrawer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  function toggleMenu() {
  setIsMenuOpen(!isMenuOpen); // Toggle the state value
}
const ToggleIcon = isMenuOpen? 'CloseIcon' : 'HamburgerIcon ';
   
  return (
    <Box className='w-full'>
      <Box as='button' variant='ghost' onClick={toggleMenu} >
        {isMenuOpen ? (<CloseIcon />):(<HamburgerIcon   />)}
      </Box>
      {isMenuOpen && (
        <Box className='absolute top-14 left-0'>
            <SideBar/>
        </Box>
        
      )}
        
      
    

       
    </Box>
  )
}

export default MenuDrawer