import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './Components/Weather'
import { Route, Routes} from 'react-router-dom'
import Search from './Components/Search'

function App() {
  const [searchValue,setSearchValue]=useState('');

  return (
    <>
    <Routes>
      <Route path='/' element={<Search setSearchValue={setSearchValue} />}></Route>
     <Route path='/weather' element={<Weather  searchValue={searchValue}/>}></Route>
     </Routes>
    </>
  )
}

export default App
