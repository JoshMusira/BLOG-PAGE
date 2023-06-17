import { useState } from 'react'
import './App.css'

import TopBar from './components/topbar/TopBar'
// import Home from './pages/home/Home'
// import Single from './components/single/Single'
import Write from './pages/write/Write'

function App() {

  return (
    <>
      <TopBar />
      <Write />
    </>
  )
}

export default App
