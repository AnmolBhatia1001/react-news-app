
import React, { useContext} from 'react'
import { AppData } from '../context'
import { Grid } from '@mui/material'
import NewsCard from './NewsCard'
import LoadingComponent from './LoadingComponent'
import NotFoundComponent from './NotFoundComponent'

const NewsSections = () => {
    const {hits, isLoading} = useContext(AppData)

    if(isLoading){
        return (
            <LoadingComponent/>
        )
    }
    if(hits.length === 0){
        return(
            <NotFoundComponent/>
        )
    }
    
    return (
    <Grid container spacing={3} p={2}>
        {hits.map((ele, index) => {
            return(
                <Grid key={index} item xs={12} md={6} lg={4} >
                    <NewsCard title={ele.title} author={ele.author} url={ele.url} date={(ele.created_at).substring(0, 10)}  />
                </Grid> 
            )
        })
        }
    </Grid>
  )
}

export default NewsSections
