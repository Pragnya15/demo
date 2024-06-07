import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Demo from './Demo'
import Movies from './Movies'
import MovieCard from './MovieCard'
import Home from './Home'
import Search from './Search'
import MovieDetail from './MovieDetail'
import Tv from './Tv'
import TvDetails from './TvDetails'
import Person from './Person'
import PersonDetails from './PersonDetails'
import Report from './Report';

function App() {
const [searchValue, setSearchValue]=useState('');
const [movieDetail, setMovieDetail]=useState('');
const [tvDetail, setTvDetail]=useState('');
const [personDetail, setPersonDetail]=useState('');
  return (
    <>

      <Navbar/>
      <div style={{ paddingTop: '0.5rem',margin:'0',padding:'0' }}>    
      <Routes>
      <Route path="/" element={<Home setSearchValue={setSearchValue} setMovieDetail={setMovieDetail}/>}></Route>
      <Route path="/movies/:category" element={<MovieCard setMovieDetail={setMovieDetail}/> } />
      <Route path="/search" element={<Search searchValue={searchValue} setMovieDetail={setMovieDetail}/>}/>
      <Route path="/detail" element={<MovieDetail movieDetail={movieDetail} setPersonDetail={setPersonDetail}/>}/>
      <Route path="/tv/:category" element={<Tv setTvDetail={setTvDetail}/>}/>
      <Route path="/tvdetail" element={<TvDetails tvDetail={tvDetail} setPersonDetail={setPersonDetail}/>}/>
      <Route path="/person/:category" element={<Person setPersonDetail={setPersonDetail}/>}/>
      <Route path="/persondetail" element={<PersonDetails personDetail={personDetail}/>}/>
      <Route path='/report' element={<Report/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
