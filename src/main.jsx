import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <HeroSection/>
  </React.StrictMode>
)
