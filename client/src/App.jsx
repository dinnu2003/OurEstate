import { useState } from 'react'

import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'

function App() {
  

  return (
    
    <div className="layout">
     <div className="navbar">
      <Navbar/>
     </div>
     <div className="content">
      <Home/>
     </div>
    </div>
    
  )
}

export default App
