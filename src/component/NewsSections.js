
import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AppData } from '../context'
import NewsCard from './NewsCard'

const NewsSections = () => {
    const fetchedData = useContext(AppData)
    return (
    <Grid container spacing={3} p={2}>
        {fetchedData.hits.map((ele, index) => {
            return(
                <Grid key={index} item xs={12} md={6} lg={4}>
                    <NewsCard title={ele.title} author={ele.author} url={ele.url} date={(ele.created_at).substring(0, 10)}  />
                </Grid> 
            )
        })

        }
        {/* <Grid item xs={12} md={6} lg={4}>
            <NewsCard title='title' author='Anmol Singh Bhatia' url='https://google.com/' date='07-12-2022'  />
        </Grid> */}
    </Grid>
  )
}

export default NewsSections
