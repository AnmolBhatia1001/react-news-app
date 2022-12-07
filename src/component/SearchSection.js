import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const SearchSection = () => {
  return (
    <Stack 
    spacing={1}
    sx={{
        marginY : '1em',
        alignItems: 'center'
    }} >
        <Typography variant='h2' gutterBottom>
            Hacker News
        </Typography>

        <Box width="500px">
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
