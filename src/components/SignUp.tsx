import React, { useState } from "react"
import "../styles/SignUp.css"
import { Link } from "react-router-dom";

interface CredentialsFormInputTypes {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export default function SignUp() {
    const [credentials, setCredentials] = useState<CredentialsFormInputTypes>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault()
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setCredentials(prevCred => { return { ...prevCred, [name]: value } })
    }

    return (
        <div className="signup">
            <h3>Sign Up!</h3>
            <form className="signup-form">
                <input type="email" name="email" value={credentials.email} placeholder="Email" onChange={handleChange} required />
                <input type="text" name="username" value={credentials.username} placeholder="Username" onChange={handleChange} required />
                <input type="password" name="password" value={credentials.password} placeholder="Password" onChange={handleChange} required />
                <input type="password" name="confirmPassword" value={credentials.confirmPassword} placeholder="Confirm Password" onChange={handleChange} required />
                <p>Already have an account?</p>
                <Link to="/signin" className="signin-link">Sign In</Link>
                <button onClick={handleClick}>Sign Up</button>
            </form>
        </div>
    )
}