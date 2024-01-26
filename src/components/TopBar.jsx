import { Avatar, Box, Button, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import SearchIcon from '../assets/icons/SearchIcon'
import CalenderIcon from '../assets/icons/CalenderIcon'
import { IconButton } from '@chakra-ui/react'
import NotificationIcon from '../assets/icons/NotificationIcon'
import DownIcon from '../assets/icons/DownIcon'
import ProfileImage from '../assets/profile.jpeg'




const TopBar = () => {
  return (
    <Box className=" hidden w-full lg:flex p-4 border-b border-b-slate-200  bg-neutral-50">
        <Box className='xl:w-[30%] md:w-[25%] pt-3 flex items-center'><Text className='text-zinc-800 text-xl font-semibold leading-7'>DashBoard</Text></Box>
        <Box className='flex w-[70%] md:w-[75%] justify-end gap-3  items-center'  >
         <InputGroup  borderRadius="3xl" w={{ base: "15rem", md: "15rem", xl: "sm" }}  >
              <InputLeftElement pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              <Input 
                type="search" 
                placeholder="Search..." 
                width='inherit'
                borderRadius='inherit'
              />
            </InputGroup>
            <Box className='flex self-center gap-2'>
                <CalenderIcon boxSize={6}/>
                <Text className="text-zinc-800 text-sm font-medium font-['Inter'] leading-snug">November 15, 2023</Text>
            </Box>
            <IconButton
                isRound={true}
                variant='outline'
                aria-label='Done'
                fontSize='20px'
                size='lg'
                icon={<NotificationIcon  boxSize={6} />}
            />
            <Box as='button'  className=" h-[52px] hover:bg-slate-200 px-2 py-1.5 rounded-[28px] border border-zinc-200  items-center gap-3 inline-flex"
            >
                <Avatar size='sm' src={ProfileImage}/>
                <span>
                    <Text className="text-right text-zinc-800 text-base font-normal">Justin Bergson</Text>
                    <Text className="text-right text-zinc-500 text-sm font-normal"> Justin@gmail.com</Text>
                </span>
                <DownIcon boxSize={6} />
            </Box>
        </Box>
    </Box>
  )
}

export default TopBar