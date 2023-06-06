import React from 'react'
import { Box, Stack, Button, NativeSelect, TextField, Typography, InputBase } from '@mui/material'

const Address = ({setStep, setDone}) => {
  return (
    <Box>
        <Typography ml='30px' mt='30px' variant='body2' fontSize='15px' fontWeight='bold'>Street Address</Typography>
        <TextField sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px'}} label='Address' required/>
        <Typography ml='30px' mt='18px' variant='body2' fontSize='15px' fontWeight='bold'>Property Type</Typography>
        <NativeSelect
            sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px', bgcolor: '#fff', color: '#000'}}
            defaultValue='Residential'>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Multi-Unit</option>
        </NativeSelect>
        <Typography ml='30px' mt='18px' variant='body2' fontSize='15px' fontWeight='bold'>What's Your Timeframe</Typography>
        <NativeSelect
            sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px', bgcolor: '#fff', color: '#000'}}
            defaultValue='Immediate'>
            <option>Immediate</option>
            <option>1 Week</option>
            <option>1-2 Week</option>
            <option>Over 2 Weeks</option>
        </NativeSelect>
        <Typography ml='30px' mt='18px' variant='body2' fontSize='15px' fontWeight='bold'>Are You the Owner?</Typography>
        <NativeSelect
            sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px', bgcolor: '#fff', color: '#000', borderColor: '#ff7000'}}
            defaultValue='Yes'>
            <option>Yes</option>
            <option>No</option>
        </NativeSelect>
        <Stack direction='row' sx={{width: '540', mt: '30px', mb: '30px'}} justifyContent='center' gap='10px'>
            <Button className='btn' variant="outlined" sx={{width: '265px', bgcolor: '#fff', color: '#FF7000', fontWeight: 'bold', height: '40px', fontSize: '18px', borderColor: '#FF7000'}} onClick={() => {
                setStep(step => step-1)
                setDone(10)
            }}>PREVIOUS</Button>
            <Button sx={{width: '265px', bgcolor: '#FF7000', color: '#fff', fontWeight: 'bold', height: '40px', fontSize: '18px'}} variant="contained" onClick={() => {
                setStep(step => step+1)
                setDone(80)
                }}>NEXT</Button>
        </Stack>
    </Box>
  )
}

export default Address