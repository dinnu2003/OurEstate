import React, { useState } from 'react'
import "./Navbar.scss"


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src='logo.png' alt='' />
          <span>OurEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>

      </div>
      <div className="right">
        <a href="/login" className="login">Sign in</a>
        <a href="/register" className="register">Sign up</a>
        <div onClick={()=>setOpen(!open)} className="menuIcon">
          ME
        </div>
        <div className={open?"menu active" :"menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/login" className="login">Sign in</a>
          <a href="/register" className="register">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
