import { Box, Card, CardActions, CardContent, CardHeader, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const NewsCard = () => {
  return (
    <Card elevation={4} sx={{padding: '8px'}} >
        <CardContent >
            <Typography sx={{typography: { xs: 'h6' , sm: 'h5'} }} component='div' gutterBottom>
                Relicensing React, Jest, Flow, and Immutable.js
            </Typography>

            <Typography variant='body2' component='div' >
                By Anmol Singh Bhatia
            </Typography>
        </CardContent>
        
        <Box direction='row' sx={{display : 'flex', justifyContent: 'space-between', alignItem: 'center', paddingX: '16px'}}>
            <Link href='https://www.google.com/' target='_blank' underline='hover' color='primary.main'>
                Read More
            </Link>
            
            <Typography variant='body1' component='div' gutterBottom>
                    07-12-2022
            </Typography>
        </Box>
    </Card>
  )
}

export default NewsCard
