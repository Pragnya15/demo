import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Demo from './Demo'
import Movies from './Movies'
import Card from './Card'
import Home from './Home'
import Search from './Search'
import MovieDetail from './MovieDetail'

function App() {
const [searchValue, setSearchValue]=useState('')
const [movieDetail, setMovieDetail]=useState('')
  return (
    <>

      <Navbar/>
      <div style={{ paddingTop: '0.5rem',margin:'0',padding:'0' }}>    
      <Routes>
      <Route path="/" element={<Home setSearchValue={setSearchValue}/>}></Route>
      <Route path="/movies/:category" element={<Card/> } />
      <Route path="/search" element={<Search searchValue={searchValue} setMovieDetail={setMovieDetail}/>}/>
      <Route path='/detail' element={<MovieDetail movieDetail={movieDetail}/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
