import { TableContainer, Thead, Tr, Table, Th, Tbody, Td, Box, Text, Avatar, Icon } from '@chakra-ui/react'
import React from 'react'
import ViewIcon from '../assets/icons/ViewIcon'
import TbOne from '../assets/tbOne.jpeg'
import TbTwo from '../assets/tbTwo.jpeg'
import TbThree from '../assets/tbThree.jpeg'
import TbFour from '../assets/tbFour.jpeg'
import TbFive from '../assets/tbFive.jpeg'


const TableComp = () => {
  return (
   <Box className=' h-fit bg-white border rounded-2xl border-slate-100 overflow-x-scroll xl:overflow-x-hidden '>
    <Box className='flex items-center justify-between pt-5 px-6'>
            <Text className="text-zinc-800  font-semibold  leading-relaxed">Last Orders</Text>
            <Text className="text-center text-emerald-400  font-medium leading-relaxed">See All</Text>
           
    </Box>
  <TableContainer className='bg-white p-4 '>
  <Table variant='simple' size={{base:'sm' , xl:'sm'}}>
    <Thead >
      <Tr className='text-gray-400 text-base font-medium py-5'>
        <Td>Name</Td>
        <Td>Date</Td>
        <Td>Amount</Td>
        <Td>Status</Td>
        <Td>Invoice</Td>
      </Tr>
    </Thead>
    <Tbody className=''>
      <Tr>
        <Td className='flex gap-2 items-center text-gray-700 text-base font-medium'><Avatar src={TbFive} size='xs' /> Marcus Bergson</Td>
        <Td  className="text-neutral-500 text-base ">Nov 15, 2023</Td>
        <Td className=' text-slate-900 text-base '>$80,000</Td>
        <Td className='text-emerald-400 text-base'>Paid</Td>
        <Td className='text-slate-900 text-xs'> <ViewIcon boxSize={4}/> View</Td>
      </Tr>
      <Tr className=''>
        <Td className='flex gap-2 items-center  text-gray-700 text-base font-medium'><Avatar src={TbFour} size='xs' /> Jaydon Vaccaro</Td>
        <Td  className="text-neutral-500 text-base ">Nov 15, 2023</Td>
        <Td className=' text-slate-900 text-base '>$150,000</Td>
        <Td className='text-red-500 text-base'>Refund</Td>
        <Td className='text-slate-900 text-xs'><ViewIcon boxSize={4}/> View</Td>
      </Tr>
      <Tr className=''>
        <Td className='flex gap-2 items-center  text-gray-700 text-base font-medium'><Avatar size='xs' src={TbThree} /> Corey Schleifer</Td>
        <Td  className="text-neutral-500 text-base ">Nov 15, 2023</Td>
        <Td className=' text-slate-900 text-base '>$87,000</Td>
        <Td className='text-emerald-400 text-base'>Paid</Td>
        <Td className='text-slate-900 text-xs'> <ViewIcon boxSize={4}/> View</Td>
      </Tr>
      <Tr className=''>
        <Td className='flex gap-2 items-center  text-gray-700 text-base font-medium'><Avatar src={TbTwo} size='xs' /> Cooper Press</Td>
        <Td  className="text-neutral-500 text-base ">Nov 15, 2023</Td>
        <Td className=' text-slate-900 text-base '>$100,000</Td>
        <Td className='text-red-500 text-base'>Refund</Td>
        <Td className='text-slate-900 text-xs'> <ViewIcon boxSize={4}/> View</Td>
      </Tr>
      <Tr className=''>
        <Td className='flex gap-2 items-center  text-gray-700 text-base font-medium'><Avatar size='xs' src={TbOne} /> Phillip Lubin</Td>
        <Td  className="text-neutral-500 text-base ">Nov 15, 2023</Td>
        <Td className=' text-slate-900 text-base '>$78,000</Td>
        <Td className='text-emerald-400 text-base'>Paid</Td>
        <Td className='text-slate-900 text-xs'> <ViewIcon boxSize={4}/> View</Td>
      </Tr>
     
    </Tbody>
  </Table>
</TableContainer>
   </Box>
  )
}

export default TableComp