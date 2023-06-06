import { Box, Stack, Button, Typography, TextField } from '@mui/material'
import React from 'react'

const PersonalInfo = ({setStep, setDone}) => {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Rejected - Out of Service Area');
    }
  return (
    <Box>
        <form onSubmit={handleSubmit}>
          <Typography ml='30px' mt='30px'  variant='body2' fontSize='15px' fontWeight='bold'>First Name</Typography>
          <TextField sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px'}} placeholder='First Name*' required/>
          <Typography ml='30px' mt='18px' variant='body2' fontSize='15px' fontWeight='bold'>Last Name</Typography>
          <TextField sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px'}} placeholder='Last Name*' required/>
          <Typography ml='30px' mt='18px' variant='body2' fontSize='15px' fontWeight='bold'>Email</Typography>
          <TextField sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px'}} placeholder='Email*' type='email' required/>
          <Typography ml='30px' mt='18px' variant='body2' fontSize='15px' fontWeight='bold'>Phone</Typography>
          <TextField sx={{ml: '30px', mr: '30px', mt: '8px', width: '540px'}} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} placeholder='Phone*' required/>
          <Typography ml='30px' mr='30px' mt='30px' variant='body2' fontSize='13px'>By submitting this form, you are agreeing to be contacted regarding your service request by means of telephone, email, or text messages including using pre-recorded or auto dialed phone calls or text messages to the phone number you have provided, including your wireless number, if provided. Consent to contact doesn't require you to purchase service.</Typography>
          <Stack direction='row' sx={{width: '540', mt: '30px', mb: '30px'}} justifyContent='center' gap='10px'>
            <Button className='btn' variant="outlined" sx={{width: '265px', bgcolor: '#fff', color: '#FF7000', fontWeight: 'bold', height: '40px', fontSize: '18px', borderColor: '#FF7000'}} onClick={() => {
              setStep(step => step-1)
              setDone(50)
              }}>PREVIOUS</Button>
            <Button sx={{width: '265px', bgcolor: '#FF7000', color: '#fff', fontWeight: 'bold', height: '40px', fontSize: '18px'}} variant="contained" type='submit'>SUBMIT</Button>
          </Stack>
        </form>
    </Box>
  )
}

export default PersonalInfo