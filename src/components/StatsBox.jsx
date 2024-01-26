import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { StatsCardDown, StatsCardUp } from './StatsCard'
import OrderIcon from '../assets/icons/OrderIcon'
import RefundIcon from '../assets/icons/RefundIcon'
import SalesIcon from '../assets/icons/SalesIcon'
import IncomeIcon from '../assets/icons/IncomeIcon'

const StatsBox = () => {
  return (
    <SimpleGrid columns={{base:'1', md:'2'}} height='fit-content' spacing={{base:'6' , md:'2' , xl: '3'}}>
        <StatsCardUp title='Total order' amount='350' icon={OrderIcon}/>
        <StatsCardDown title='Total Refund' amount='270' icon={RefundIcon}/>
        <StatsCardUp title='Average Sales' amount='1567' icon={SalesIcon}/>
        <StatsCardDown title='Total Income' amount='$350.000' icon={IncomeIcon}/>
    </SimpleGrid>
  )
}

export default StatsBox