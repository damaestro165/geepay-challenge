import { Box, SimpleGrid, Table } from '@chakra-ui/react';
import SideBar from './components/SideBar';
import LayoutCountainer from './components/LayoutCountainer';
import StatsBox from './components/StatsBox';
import Platform from './components/Platform';
import TableComp from './components/TableComp';

export const Dashboard = () => {
  return (
    <>
      <Box className='flex w-full relative '>
        <Box className='hidden lg:flex md:w-[6%] fixed z-50'> <SideBar /></Box>
        <Box className=' lg:ml-[3.8rem] md:w-[94%]  xl:ml-[4.8rem] w-full bg-gray-50'>
            <LayoutCountainer />
            <SimpleGrid columns={{base:'1', lg:'2'}} overflowX='scroll' className='p-5 mt-10 lg:mt-[5rem] ' spacing={[3, 2,6]} gridTemplateColumns={{base:'1fr', lg: '1', xl: '1.8fr 1.2fr',  }}  >
              <Box></Box>
              <StatsBox/>
              <TableComp/>
              <Platform/>
            </SimpleGrid>
        </Box>
        
      </Box>
      
    </>
  );
4};
