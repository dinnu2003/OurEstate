import React from 'react'
import "./Layout.scss"
import { Outlet} from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.jsx"

function Layout() {
  return (
    <div className="layout">
     <div className="navbar">
      <Navbar/>
     </div>
     <div className="content">
      <Outlet/>
     </div>
    </div>
  )
}

export default Layout
