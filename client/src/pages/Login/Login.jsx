import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate,  } from "react-router-dom"
import apiRequest from '../../lib/apiRequest';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
function Login() {
    const [error,setError]=useState("")
    const navigate=useNavigate();
    const {updateUser}=useContext(AuthContext)
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError("")
        const formData=new FormData(e.target);
        const username=formData.get("username")
        const password=formData.get("password")
        try {
            const res=await apiRequest.post("/auth/login",{
                username,password

            })
            updateUser(res.data)
            
            navigate("/")
            

        } catch (err) {
            setError(err.response.data.message)
        }
    }
  return (
    
    <div className='loginer'>

            <div className="container">
                <form onSubmit={handleSubmit} >
                    <h1>Login </h1>
                    
                    <input name='username' type='text' placeholder='username' required />
                    <input name='password' type='password' placeholder='Password' required />

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <span>Don't have an account? <Link className='border' to='/register'>Sign in</Link></span>
                    <button type='submit'>Login</button>

                </form>

            </div>
            <div className="image-container">
                <img src="bg.png" />
            </div>
        </div>
  )
}

export default Login
