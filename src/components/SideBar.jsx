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
    <Box className=' flex justify-between lg:gap-3 xl:gap-6  flex-col w-full relative '>
      <VStack className=' justify-between lg:pt-8 pb-4 border-r xl:h-screen max-h-screen border-b w-full bg-neutral-50 border-b-zinc-300 border-r-zinc-300 px-2'>
          <VStack className='justify-evenly xl:h-2/3 xl:mb-[2rem]'>
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
                size='sm'
                icon={  <Icon as={CategoryIcon} boxSize={5} /> } 
                 _hover={{
                  border: '1px'
                }}
                  
          />
         
           <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
               size='sm'
                icon={  <Icon as={ProfileUserIcon} boxSize={5} /> }
                _hover={{
                  border: '1px'
                }}
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                size='sm'
                icon={  <Icon as={TrendUpIcon} boxSize={5}  /> }
                _hover={{
                  border: '1px'
                }}
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
               size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={BoxIcon} boxSize={5}  /> }
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={DiscountIcon}  boxSize={5} /> }
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={InfoCircleIcon} boxSize={5}  /> }
          />
          <Box  className="w-[46px] h-[92px] p-2 bg-white rounded-[100px] flex-col justify-start items-center gap-2 inline-flex">
            <IconButton
               backgroundColor='white'
                aria-label='Nav Button'
                 size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={BrightIcon} boxSize={5}  /> }
          />
           <IconButton
                backgroundColor='white'
                aria-label='Nav Button'
               size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={DarkIcon} boxSize={5} /> }
          />
          </Box>
          
          </VStack>
          <VStack className='xl:h-1/3' >
            <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
               fontSize= {{ md: "20px", xl: '25px' }}
                size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={ArrowRight}  boxSize={5}/> }
          />
          <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                fontSize= {{ md: "20px", xl: '25px' }}
                size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={SettingIcon} boxSize={5}/> }
          />
            <IconButton
                backgroundColor='rgb(250 250 250)'
                aria-label='Nav Button'
                fontSize= {{ md: "20px", xl: '25px' }}
                size='sm'
                _hover={{
                  border: '1px'
                }}
                icon={  <Icon as={LogoutIcon} boxSize={5} /> }
          />
        
         </VStack>

      </VStack>
       
    </Box>
  )
}

export default SideBar