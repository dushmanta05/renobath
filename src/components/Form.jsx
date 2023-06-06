import React, {useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'

import ProgressBar from './ProgressBar'
import SelectService from './SelectService'
import Address from './Address'
import PersonalInfo from './PersonalInfo'

const Form = () => {
    const [step, setStep] = useState(0)
    const [done, setDone] = useState(10)

    const Display = () => {
        if(step === 0){
            return <SelectService setStep={setStep} setDone={setDone}/>
        } else if (step === 1){
            return <Address setStep={setStep} setDone={setDone}/>
        } else {
            return <PersonalInfo setStep={setStep} setDone={setDone}/>
        }
    }

  return (
    <Box bgcolor='#fff' width='600px' borderRadius='5px' >
        <Typography variant='h4' textAlign='center' mt='30px' fontWeight='bold'>Get A Free Quote</Typography>
        <Stack mt='25px' ml='30px' mr='30px' direction='row' justifyContent='space-between'>
            <Typography variant='body2' fontSize='15px' fontWeight='bold'>
                Step {step + 1} of 4
            </Typography>
            <Typography variant='body2' fontSize='15px' fontWeight='bold'>{done}%</Typography>
        </Stack>
        <ProgressBar done={done}/>
        <Box>{Display()}</Box>
    </Box>
  )
}

export default Form