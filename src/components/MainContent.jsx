import React from 'react'
import { Box, Stack, Container } from '@mui/material'

import Header from './Header'
import Banner from './Banner'
import Form from './Form'

const MainContent = () => {
  return (
    <div className='main-content'>
    <Box>
        <Header />
        <Stack ml='150px' direction='row' alignItems='flex-start' justifyContent='centre' gap={10} >
          <Banner />
          <Form />
        </Stack>
    </Box>
    </div>
  )
}

export default MainContent