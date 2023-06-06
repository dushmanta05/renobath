import React from 'react'
import { Box, Button, Typography, Stack, TextField } from '@mui/material'
import data from '../data'
import Service from './Service'

const SelectService = ({setStep, setDone}) => {
    let allService = data.map(item => {
        return <Service key={item.id} {...item} />
    })
    return (
    <Box mt='28px'>
        <Stack direction='column'>
            <Typography ml='30px' variant='body2' fontSize='15px' fontWeight='bold'>What type of service do you need?</Typography>
            <Stack sx={{width: '540px', mt: '30px', ml: '30px'}} alignItems='center' justifyContent='space-around' spacing={4} direction='row'>
            {allService}
            </Stack>
            <Typography ml='30px' variant='body2' fontSize='15px' fontWeight='bold'>Where will this project take place?</Typography>
            <TextField inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}} sx={{ml: '30px', mr: '30px', mt: '8px', borderColor: '#ff7000'}} label="ZIP Code" required/>
            <Button type='submit' variant="contained" sx={{bgcolor: '#FF7000', color: '#fff', ml: '30px', mr: '30px', mt: '35px', mb: '30px', fontWeight: 'bold', height: '40px', fontSize: '18px'}} onClick={() => {
                setStep(step => step+1)
                setDone(50)
            }}>NEXT STEP</Button>
        </Stack>
    </Box>
  )
}

export default SelectService