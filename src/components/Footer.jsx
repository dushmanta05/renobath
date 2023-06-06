import React from 'react'
import { Container, Box, Typography, Stack } from '@mui/material'

const Footer = () => {
  return (
      <Stack sx={{bgcolor: '#242b30', color: '#98a0a5'}}>
        <Box sx={{mt: '45px', mr: '150px', mb: '30px', ml: '150px'}}>
          <Typography variant='body2' sx={{textAlign: 'center', fontSize: '12px'}}>THIS SITE IS A FREE SERVICE TO ASSIST HOMEOWNERS IN CONNECTING WITH LOCAL SERVICE CONTRACTORS. ALL CONTRACTORS ARE INDEPENDENT AND THIS SITE DOES NOT WARRANT OR GURANTEE ANY WORK PERFORMED. IT IS THE RESPONSIBILITY OF HOME WONER TO VERIFY THAT THE HIRED CONTRACTOR FURNISHES THE NECESSARY LICENSE AND INSURANCE REQUIRED FOR THE WORK BEING PERFORMED. ALL PERSON DEPICTED IN A PHOTO OR VIDEO ARE ACTORS OR MODELS AND NOT CONTRACTORS LISTED ON THIS SITE
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>
          <Typography variant='body2'>PRIVACY POLICY</Typography>
          <Typography variant='body2'>CONTACT</Typography>
        </Stack>
        <Typography sx={{textAlign: 'center', mt: '30px', mb: '30px'}} variant='body2'>&copy; 2022 YOURDREAMBATHROOM.NET</Typography>
      </Stack>
  )
}

export default Footer