import {Typography } from '@mui/material'
import React from 'react'

const LoadingComponent = () => {
  return (
    <Typography variant='h3' component='div' sx={{typography: { xs: 'h4' , sm: 'h3'}  , textAlign : 'center', marginTop: '2em'}} >
      Loading......
    </Typography>
  )
}

export default LoadingComponent
