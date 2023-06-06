import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import correctIcon from '/src/assets/Images/correct-icon.png'

export const Detail = () => {
  return (
    <Box sx={{mt: '70px'}}>
    <Stack direction='row' pb='10px'  alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon'  style={{width: '20px'}}/>
        <Typography variant='p' sx={{fontWeight: 'normal', fontSize: '20px'}}>Complete FREE Quote - No Obligation</Typography>   
    </Stack>
    <Stack direction='row' pb='10px' alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon' style={{width: '20px'}}/>
        <Typography variant='p' sx={{fontWeight: 'normal', fontSize: '20px'}}>Full Bathroom Remodels</Typography>   
    </Stack>
    <Stack direction='row' pb='10px' alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon' style={{width: '20px'}}/>
        <Typography variant='p' sx={{fontWeight: 'normal', fontSize: '20px'}}>New Tub Installations</Typography>   
    </Stack>
    <Stack direction='row' pb='10px' alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon' style={{width: '20px'}}/>
        <Typography variant='p' sx={{fontWeight: 'normal', fontSize: '20px'}}>New Shower Installations</Typography>   
    </Stack>   
    </Box>
  )
}
