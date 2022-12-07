import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppData } from '../context'

const SearchSection = () => {
  const {handleChange } = useContext(AppData)
  return (
    <Stack 
    spacing={1}
    p={2}
    sx={{
        marginY : '1em',
        alignItems: 'center'
    }} >
        <Typography className='primary-font' sx={{typography: { xs: 'h3' , sm: 'h2'}  , textAlign : 'center'}} gutterBottom>
            Hacker News
        </Typography>

        <Box sx={{ width: {xs: '100%' , sm: '500px'}}}>
            <TextField 
            label='Search for news' 
            variant='outlined'
            size='medium'
            fullWidth
            onChange={(event)=>handleChange(event, event.target.value)}
            />
        </Box>
    </Stack>
  )
}

export default SearchSection
