import React, { useState } from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TodoPage from "./components/Todos/TodoPage"

export type User = {
  username: string,
  email: string,
} | null

function App() {

  const [user, setUser] = useState<User>(null)

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TodoPage user={user} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
