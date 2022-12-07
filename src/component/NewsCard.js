import { Box, Card, CardContent, Link, Typography } from '@mui/material'
import React from 'react'

const NewsCard = (props) => {
  return (
    <Card elevation={4} sx={{height: '200px', display: 'flex', flexDirection : 'column' ,  justifyContent: 'space-between' , padding: '8px'}} >
        <CardContent >
            <Typography sx={{typography: { xs: 'h6' , sm: 'h5'} }} component='div' gutterBottom>
                {props.title}
            </Typography>

            <Typography variant='body2' component='div' >
                By {props.author}
            </Typography>
        </CardContent>
        
        <Box direction='row' sx={{display : 'flex', justifyContent: 'space-between', alignItem: 'center', paddingX: '16px'}}>
            <Link href={props.url} target='_blank' underline='hover' color='primary.main'>
                Read More
            </Link>
            
            <Typography variant='body1' component='div' gutterBottom>
                {props.date}
            </Typography>
        </Box>
    </Card>
  )
}

export default NewsCard
