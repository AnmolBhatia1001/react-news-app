
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const NewsSections = () => {
    const API = 'http://hn.algolia.com/api/v1/search?query=react';

    const fetchAPIData = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        fetchAPIData(API)
    }, [])


    return (
    <Grid container spacing={3} p={2}>
        <Grid item xs={12} md={6} lg={4}>
            <NewsCard />
        </Grid>
    </Grid>
  )
}

export default NewsSections
