import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const Service = (props) => {
  return (
    <Box sx={{height: '200px'}}>
      <Button sx={{width: '80px', boxShadow: 10}}>
        <img src={`${props.url}`} width='80px'/>
      </Button>
      <Box>
        <Typography variant='body2' fontSize='13px' fontWeight='bold' textAlign='center' mt='15px' >{props.title}</Typography>
      </Box>
    </Box>
  )
}

export default Service