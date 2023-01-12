import React, { useState } from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Header from "./components/Header"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const [user, setUser] = useState(null)
  if (!user){
    <Navigate to="/signup" />
  }

return (
  <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path="/" />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </main>
  </div>
);
}

export default App;
