import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../../App"

export default function HomePage({ user }: { user: User }) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/signin")
        }
    }, [navigate, user])
    return (
        <div>
            <p>Home Page</p>
        </div>
    )
}