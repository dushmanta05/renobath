import React from 'react'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'

import Logo from '/src/assets/Images/bathroom.png'
import CallIcon from '/src/assets/Images/phonecall.png'

const Navbar = () => {
  return (
    <Box className='navbar'>
      <Stack direction='row' justifyContent='space-between' alignItems='center' mt='15px' ml='50px' mr='50px' mb='15px' >
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
          <img src={Logo} alt='logo' style={{width: '48px'}} />
          <Stack direction='column'>
            <Typography component='h2' fontFamily='Arial' fontWeight='bold'><span style={{color: '#FF7000'}}>BHUBANESWAR</span> BATHROOM REMODELING</Typography>
            <Typography color={{color: '#c0bec0'}}>1-Day Bath Remodels</Typography>
          </Stack>
        </Stack>
      <Stack>
        <Button sx={{color: '#fff', bgcolor: '#FF7000', height: '50px', width: '200px'}}>
          <IconButton size='large' sx={{bgcolor: '#FFF', borderRadius: '4px', position: 'absolute', left: '2.5px'}}>
            <img src={CallIcon} style={{height: '20px', width: '20px'}}/>
          </IconButton>
          <Typography sx ={{ml: '40px'}}variant='h6'>(855) 501-4469</Typography>
        </Button>
      </Stack>
    </Stack>
    </Box>
  )
}

export default Navbar