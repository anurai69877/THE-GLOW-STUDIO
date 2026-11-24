
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./assets/css/style.css";

import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'

import HomePage from './Components/Pages/HomePages'
import About from './Components/Pages/About'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<About/>} />




      </Routes>

      <Footer />

    </BrowserRouter>
  </StrictMode>,
)
