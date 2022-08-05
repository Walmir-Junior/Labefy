import React, { useState } from 'react'
import CreatePlaylist from './Components/CreatePlaylist/CreatePlaylist'
import Header from './Components/Header/Header'
import MenegerPage from './Components/MenegerPage/MenegerPage'

const App = () => {

  const [currentPage, setCurrentPage] = useState('PlaylistCreation')

  const renderCurrentPage = () => {
    if (currentPage === 'PlaylistCreation' ){
      return  <CreatePlaylist />
    } else if(currentPage === 'playlistManeger'){
      return  <MenegerPage />
    }
  }

  const changePage = (currentPage) => {
    setCurrentPage(currentPage)
  }
  return (
    <div>
      <Header changePage={changePage} />  
     {renderCurrentPage()}
    </div>
  )
}


export default App
