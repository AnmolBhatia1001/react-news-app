
import { Grid } from '@mui/material'
import React from 'react'
import NewsCard from './NewsCard'

const NewsSections = () => {
  return (
    <Grid container spacing={3} p={2}>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard/>
        </Grid>
    </Grid>
  )
}

export default NewsSections
