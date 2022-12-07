import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AppData } from '../context';
import { useMediaQuery, useTheme } from '@mui/material';

const PaginationComponent = () => {
  const {nbPages , page, handlePageChange} = React.useContext(AppData) 

  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Stack my={2} spacing={2} direction='row' justifyContent='center'>
      <Pagination count={nbPages} page={page + 1} variant='outlined' shape='rounded' 
      onChange={(e,v)=> handlePageChange(e, (v-1))}  
      size={mobile ? 'small' : 'medium'}
      />
    </Stack>
  )
}

export default PaginationComponent
