import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const SearchSection = () => {
  return (
    <Stack 
    spacing={1}
    p={2}
    sx={{
        marginY : '1em',
        alignItems: 'center'
    }} >
        <Typography  sx={{typography: { xs: 'h3' , sm: 'h2'}  , textAlign : 'center'}} gutterBottom>
            Hacker News
        </Typography>

        <Box sx={{ width: {xs: '100%' , sm: '500px'}}}>
            <TextField 
            label='Search for news' 
            variant='outlined'
            type='text'
            size='medium'
            fullWidth
            />
        </Box>
    </Stack>
  )
}

export default SearchSection
