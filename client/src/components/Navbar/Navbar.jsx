import React, { useState } from 'react'
import "./Navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"


function Navbar() {
  const [open, setOpen] = useState(false);
  const user=false;
  return (
    <nav>
      <div className="left">
        <Link className="linktags logo" to="/" >
          <img src='logo.png' alt='' />
          <span>OurEstate</span>
        </Link>
        <Link className="linktags" to="/">Home</Link>
        <Link className="linktags" to="/">About</Link>
        <Link className="linktags" to="/">Contact</Link>
        <Link className="linktags" to="/">Agents</Link>

      </div>
      <div className="right">
        {!user?(<><Link className="linktags login" to="/login" >Sign in</Link>
        <Link className="linktags register" to="/register" >Sign up</Link></>):
        (<><Link to="/profile" className='linktags profile'><img src='logo.png' alt=''/><span>John Doe</span></Link><Link className='linktags logout' to="/logout">LogOut</Link></>)}
        
        <div onClick={()=>setOpen(!open)} className="menuIcon">
          <MenuIcon/>
        </div>
        <div className={open?"menu active" :"menu"}>
          <Link className="linktags" to="/">Home</Link>
          <Link className="linktags" to="/">About</Link>
          <Link className="linktags" to="/">Contact</Link>
          <Link className="linktags" to="/">Agents</Link>
          <Link className="linktags login" to="/login" >Sign in</Link>
          <Link className="linktags register" to="/register" >Sign up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
