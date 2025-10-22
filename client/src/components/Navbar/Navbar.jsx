import React, { useState, useContext } from 'react'
import "./Navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';




function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { currentUser, updateUser } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  const menuLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      updateUser(null)
      setOpen(!open)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

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
        {!currentUser ? (<><Link className="linktags imp login" to="/login" >Sign in</Link>
          <Link className="linktags register" to="/register" >Sign up</Link></>) :
          (<><Link to="/profile" className='linktags imp profile'><img src={currentUser.avatar || "logo.png"} alt='' /><span>{currentUser.username}</span></Link><Link onClick={handleLogout} className='linktags logout' >LogOut</Link></>)}

        <div onClick={() => setOpen(!open)} className="menuIcon">
          <MenuIcon />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link onClick={() => setOpen(!open)} className="linktags" to="/">Home</Link>
          <Link onClick={() => setOpen(!open)} className="linktags" to="/">About</Link>
          <Link onClick={() => setOpen(!open)} className="linktags" to="/">Contact</Link>
          <Link onClick={() => setOpen(!open)} className="linktags" to="/">Agents</Link>
          {!currentUser ? (<><Link onClick={() => setOpen(!open)} className="linktags login" to="/login" >Sign in</Link>
            <Link onClick={() => setOpen(!open)} className="linktags register" to="/register" >Sign up</Link></>) :
            (<><Link onClick={menuLogout} to="/profile" className='linktags profile'><img src={currentUser.avatar || "logo.png"} alt='' /><span>{currentUser.username}</span></Link><Link onClick={() => setOpen(!open)} className='linktags logout' >LogOut</Link></>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
