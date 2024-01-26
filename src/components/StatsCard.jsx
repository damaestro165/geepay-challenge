import { Badge, Box, Card, CardBody, CardFooter, CardHeader, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'

import StatsUpArrow from '../assets/icons/StatsUpArrow'
import TrendsUp from '../assets/TrendsUp.png'
import TrendsDown from '../assets/TrendsDown.png'
import ArrowTrendDown from '../assets/icons/ArrowTrendDown'

export const StatsCardUp = ({title, icon, amount}) => {
  return (
    <Card varriant='outline' className=' bg-white'  borderRadius='xl'>
        <CardBody className='flex flex-col p-2 gap-2 justify-between'>
         <Box className='flex justify-between'>
            <Box className="w-10 h-10 rounded-full border flex justify-center items-center border-neutral-200" >
                <Icon as={icon} boxSize={4} />
            </Box>
            <Image w={20} h={8}   src={TrendsUp} />
         </Box>
         <Box>
            <Text className="text-zinc-500 text-lg font-medium font-['Plus Jakarta Sans'] leading-relaxed">{title}</Text>
            <Text className="text-gray-700 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-loose">{amount}</Text>
         </Box>
         <Box className=' justify-start items-center gap-2.5 inline-flex'>
            <Box className=" p-2 bg-emerald-400 bg-opacity-10 rounded-full justify-center items-center gap-1 inline-flex"  >
              <StatsUpArrow boxSize={4}/>
              <Text className="text-emerald-400 text-md font-medium font-['Plus Jakarta Sans'] leading-none">
                     23,5%
              </Text>
            </Box>
            <Text className="text-zinc-600 text-sm font-normal font-['Inter']">vs. previous month</Text>
         </Box>

        </CardBody>
    </Card>
  )
}

 export const StatsCardDown = ({title, icon, amount}) => {
  return (
    <Card varriant='outline' className=' bg-white' borderRadius='xl'>
        <CardBody className='flex flex-col p-2 gap-2 justify-between'>
         <Box className='flex justify-between'>
            <Box className="w-10 h-10 rounded-full border flex justify-center items-center border-neutral-200" >
                  <Icon as={icon} boxSize={5} />
            </Box>
            <Image w={20} h={8}   src={TrendsDown} />
         </Box>
         <Box>
            <Text className="text-zinc-500 text-lg font-medium font-['Plus Jakarta Sans'] leading-relaxed">{title}</Text>
            <Text className="text-gray-700 text-2xl font-semibold font-['Plus Jakarta Sans'] leading-loose">{amount}</Text>
         </Box>
         <Box className=' justify-start items-center gap-2.5 inline-flex'>
            <Box className=" p-2 bg-red-500  bg-opacity-10 rounded-full justify-center items-center gap-1 inline-flex"  >
              <ArrowTrendDown boxSize={4}/>
              <Text className="text-red-500 text-md font-medium font-['Plus Jakarta Sans'] leading-none">
                     23,5%
              </Text>
            </Box>
            <Text className="text-zinc-600 text-sm font-normal font-['Inter']">vs. previous month</Text>
         </Box>

        </CardBody>
    </Card>
  )
}