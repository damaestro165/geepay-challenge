import { Box } from '@chakra-ui/react';
import SideBar from './components/SideBar';
import LayoutCountainer from './components/LayoutCountainer';

export const Dashboard = () => {
  return (
    <>
      <Box className='flex w-full'>
        <Box className='hidden lg:flex md:w-[6%]'> <SideBar /></Box>
        <Box className='w-full lg:w-[94%]'>
            <LayoutCountainer />
        </Box>
        
      </Box>
      
    </>
  );
};
