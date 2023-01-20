import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/SignIn.css"

export default function SignIn() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setUserDetails(prevDets => { return { ...prevDets, [name]: value } })
    }
    return (
        <div className="signin">
            <form className="signin-form">
                <input type="email" name="email" value={userDetails.email} placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" value={userDetails.password} placeholder="Password" onChange={handleChange} required />
                <p>Don't have an account?</p>
                <Link to="/signup" className="signup-link"> Sign Up </Link>
                <button>Sign In</button>
            </form>
        </div>
    )
}