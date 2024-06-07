import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import Login from './Login'
// import Postd from './Postd'

function App() {

  return (
    <>
   {/* <Demo/> */}
   
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/post' element={<Post/>}/>
     </Routes>
    </>
  )
}

export default App;
