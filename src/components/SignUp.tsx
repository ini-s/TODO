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
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target
        setCredentials({...credentials, [name]: value})
    }

    return (
        <div className="signup">
            <h1>TODO</h1>
            <h3>Sign Up!</h3>
            <form className="signup-form">
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
                <p>Already have an account?</p>
                <Link to="/signin" className="signin-link">Sign In</Link>
                <button onClick={handleClick}>Sign Up</button>
            </form>
        </div>
    )
}