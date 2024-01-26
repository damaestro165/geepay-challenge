import { Box, Icon, IconButton, Image, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/Vector.png'
import CategoryIcon from '../assets/icons/CategoryIcon'
import ArrowRight from '../assets/icons/ArrowRight'
import BoxIcon from '../assets/icons/BoxIcon'
import BrightIcon from '../assets/icons/BrightIcon'
import DarkIcon from '../assets/icons/DarkIcon'
import TrendUpIcon from '../assets/icons/TrendUpIcon'
import InfoCircleIcon from '../assets/icons/InfoCircleIcon'
import LogoutIcon from '../assets/icons/LogoutIcon'
import SettingIcon from '../assets/icons/SettingsIcon'
import ProfileUserIcon from '../assets/icons/ProfileUserIcon'
import DiscountIcon from '../assets/icons/DiscountIcon'

const SideBar = () => {
  return (
    <Box className=' flex justify-between flex-col w-full '>
      <VStack className=' justify-between lg:pt-8 pb-4 border-r border-b w-full bg-neutral-50 border-b-zinc-300 border-r-zinc-300 px-2'>
          <VStack className=' xl:gap-5 justify-evenly xl:mb-[5rem]'>
            <Image
            display={{ base:"none", md:'flex'}}
            boxSize='100px'
            src={Logo}
            alt='Logo'
            w= {{ md: "30px", xl: "40px" }}
            h={{ md: "30px", xl: "40px" }}
            mb='5px'
          />
          
          <IconButton  
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                size='md'
                icon={  <Icon as={CategoryIcon} boxSize={6} /> } 
                 _hover={{
                  border: '1px'
                }}
                  
          />
         
           <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                size='md'
                icon={  <Icon as={ProfileUserIcon} boxSize={6} /> }
                _hover={{
                  border: '1px'
                }}
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
             
                size='md'
                icon={  <Icon as={TrendUpIcon} boxSize={6}  /> }
                _hover={{
                  border: '1px'
                }}
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
               
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={BoxIcon} boxSize={6}  /> }
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={DiscountIcon}  boxSize={6} /> }
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
            
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={InfoCircleIcon} boxSize={6}  /> }
          />
          <Box  className="w-[46px] h-[92px] p-2 bg-white rounded-[100px] flex-col justify-start items-center gap-2 inline-flex">
            <IconButton
               backgroundColor='white'
                aria-label='Nav Button'
               
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={BrightIcon} boxSize={6}  /> }
          />
           <IconButton
                backgroundColor='white'
                aria-label='Nav Button'
               
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={DarkIcon} boxSize={6} /> }
          />
          </Box>
          
          </VStack>
          <VStack className='lg:gap-3' >
            <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
               fontSize= {{ md: "20px", xl: '25px' }}
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={ArrowRight}  boxSize={6}/> }
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                fontSize= {{ md: "20px", xl: '25px' }}
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={SettingIcon} boxSize={6}/> }
          />
            <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                fontSize= {{ md: "20px", xl: '25px' }}
                size='md'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={LogoutIcon} boxSize={6} /> }
          />
        
         </VStack>

      </VStack>
       
    </Box>
  )
}

export default SideBar