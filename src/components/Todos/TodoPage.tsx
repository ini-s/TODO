import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../../App"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import "./TodoStyles.css/TodoPage.css"

export default function TodoPage({ user }: { user: User }) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/signin")
        }
    }, [navigate, user])
    return (
        <div className="todo-page">
            <main>
                <AddTodo />
                <TodoList />
            </main>
            <footer className="footer"></footer>
        </div>
    )
}