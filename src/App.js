import React, { useEffect } from 'react'
import './App.css'
import SearchSection from './component/SearchSection'
import NewsSections from './component/NewsSections'

const App = () => {
    return (
    <div id='App'>
        <SearchSection/>
        <NewsSections/>
    </div>
  )
}

export default App
