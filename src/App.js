import React from 'react'
import SearchSection from './component/SearchSection'
import NewsSections from './component/NewsSections'
import PaginationComponent from './component/PaginationComponent'
import './App.css'

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
