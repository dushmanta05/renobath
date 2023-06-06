import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box>
        <Typography sx={{ mb: '5px', ml: '150px', paddingTop: '30PX'}} variant='h6' style={{color: '#FF7000', fontWeight: 'bold'}}>GET A 100% FREE QUOTE</Typography>
        <Typography variant='h4' sx={{mb: '25px', ml: '150px'}} style={{fontWeight: 'bold', fontSize: '40px'}}>One-Day Bath Remodels</Typography>
    </Box>
  )
}

export default Header