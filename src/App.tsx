import React, { useState } from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import HomePage from "./components/Home/HomePage"

function App() {
  // const [user, setUser] = useState<{ name: string }>({ name: "ini" })
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {user ?
            <Route path="/" element={<HomePage />} /> :
            <Route path="/signin" element={<SignIn />} />
          }
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
