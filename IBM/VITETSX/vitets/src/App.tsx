import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import News from './component/News'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <Routes>
    <Route path="/category/:category" element={<News />} />
    </Routes> 
    </>

  )
}

export default App
