import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import bannerImage from '/src/assets/Images/bathrrom-design.jpg'

import { Detail } from './Detail'

const Banner = () => {
  return (
    <Box sx={{mb: '140px'}}>
      <Stack direction='column'>
        <Typography variant='h6' mb='35px'>
          Your Dream Bathroom Installed in As Little As 1 Day!
        </Typography>
        <img className='banner-img' src={bannerImage} alt='banner' style={{width: '550px'}}/>
        <Detail />
      </Stack>
    </Box>
  )
}

export default Banner