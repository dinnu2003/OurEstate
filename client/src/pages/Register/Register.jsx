import React from 'react'
import "./Register.scss"
import { Link, useNavigate } from "react-router-dom"

import { useState } from 'react'
import apiRequest from "../../lib/apiRequest"
function Register() {
    const [error, setError] = useState("");
    const [passError, setPassError] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const navigate = useNavigate();
    const handleBlur = () => {
        if (confirmPass && password !== confirmPass) {
            setPassError("Passwords do not match!");
        } else {
            setPassError("");
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        const formData = new FormData(e.target);
        const username = formData.get("username")
        const email = formData.get("email")
        

        try {
            const res = await apiRequest.post("/auth/register", {
                username, email, password
            })
            console.log(res.data)
            navigate("/login")
        } catch (err) {
            setError(err.response.data.message)

        }
    }
    return (
        <div className='signup'>

            <div className="container">
                <form onSubmit={handleSubmit} >
                    <h1>Create your account</h1>
                    <input name='username' type='text' placeholder='Enter your username' required />
                    <input name='email' type='email' placeholder='Email:*****@gmail.com' required />
                    <input name='password' type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input name='confirmPass' type='password' placeholder='Password Confirmation' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} onBlur={handleBlur} required />
                    {passError && <p style={{ color: "red" }}>{passError}</p>}
                    <span>Already have an account? <Link className='border' to='/login'>Sign in</Link></span>
                    <button type='submit' disabled={!!error}>Register</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}

                </form>

            </div>
            <div className="image-container">
                <img src="bg.png" />
            </div>
        </div>
    )
}

export default Register
