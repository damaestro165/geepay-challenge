import { Box, Progress, Text } from '@chakra-ui/react'
import React from 'react'

const Platform = () => {
  return (
    <Box className=" bg-white rounded-lg p-5 flex flex-col gap-5">
        <Box className='flex justify-between'>
            <Text className="text-zinc-800  font-semibold  leading-relaxed">Top Platform</Text>
            <Text className="text-center text-emerald-400  font-medium font-['Plus Jakarta Sans'] leading-relaxed">See All</Text>
           
        </Box>
        <Box className='flex flex-col gap-3'>
            <Text className="text-zinc-800 font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
                Book Bazaar
            </Text>
            <Progress borderRadius='xl' value={50} colorScheme='purple' />
            <Box className='flex justify-between'>
                <Text className="text-neutral-600  font-normal  leading-relaxed"> $2,500,000</Text>
                <Text className="text-neutral-600  font-normal font-['Plus Jakarta Sans'] leading-relaxed">+15%</Text>
            </Box>
        </Box>
         <Box className='flex flex-col gap-3'>
            <Text className="text-zinc-800 font-semibold  leading-relaxed">
                Artisan Aisle
            </Text>
            <Progress borderRadius='xl' value={40} colorScheme='twitter'  />
            <Box className='flex justify-between'>
                <Text className="text-neutral-600  font-normal font-['Plus Jakarta Sans'] leading-relaxed"> $1,800,000</Text>
                <Text className="text-neutral-600  font-normal font-['Plus Jakarta Sans'] leading-relaxed">+10%</Text>
            </Box>
        </Box>
        <Box className='flex flex-col gap-3'>
            <Text className="text-zinc-800  font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
                Toy Troop
            </Text>
            <Progress borderRadius='xl' value={35} colorScheme='orange' />
            <Box className='flex justify-between'>
                <Text className="text-neutral-600  font-normal font-['Plus Jakarta Sans'] leading-relaxed"> $1,200,000</Text>
                <Text className="text-neutral-600 font-normal font-['Plus Jakarta Sans'] leading-relaxed">+8%</Text>
            </Box>
        </Box>
        <Box className='flex flex-col gap-3'>
            <Text className="text-zinc-800  font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
                XStore
            </Text>
            <Progress borderRadius='xl' value={75} colorScheme='teal' />
            <Box className='flex justify-between'>
                <Text className="text-neutral-600 font-normal font-['Plus Jakarta Sans'] leading-relaxed"> $2,500,000</Text>
                <Text className="text-neutral-600  font-normal font-['Plus Jakarta Sans'] leading-relaxed">+15%</Text>
            </Box>
        </Box>
        
    </Box>
  )
}

export default Platform
