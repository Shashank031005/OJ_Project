import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LogInPage from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
