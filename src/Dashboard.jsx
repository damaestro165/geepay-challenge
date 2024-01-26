import { Box, SimpleGrid, Table } from '@chakra-ui/react';
import SideBar from './components/SideBar';
import LayoutCountainer from './components/LayoutCountainer';
import StatsBox from './components/StatsBox';
import Platform from './components/Platform';
import TableComp from './components/TableComp';

export const Dashboard = () => {
  return (
    <>
      <Box className='flex w-full'>
        <Box className='hidden  lg:flex md:w-[6%]'> <SideBar /></Box>
        <Box className='w-full lg:w-[94%] bg-gray-50'>
            <LayoutCountainer />
            <SimpleGrid columns={{base:'1', lg:'2'}} className='p-5' spacing={[3, 2,6]} gridTemplateColumns={{base:'1fr', lg: '1fr 1fr', xl: '1.6fr 1.4fr',  }}  >
              <Box></Box>
              <StatsBox/>
              <TableComp/>
              <Platform/>
            </SimpleGrid>
        </Box>
        
      </Box>
      
    </>
  );
};
