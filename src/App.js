import React from 'react'
import './App.css'
import SearchSection from './component/SearchSection'
import NewsSections from './component/NewsSections'
import PaginationComponent from './component/PaginationComponent'

const App = () => {
    return (
    <div id='App'>
        <SearchSection/>
        <PaginationComponent/>
        <NewsSections/>
    </div>
  )
}

export default App
