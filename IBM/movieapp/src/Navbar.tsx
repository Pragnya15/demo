import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg fixed-top gradient-custom">
    <div className="container-fluid">
    <Link to="/">  
          <img src="https://static.firecore.com/images/blog/infuse71-tmdb_2x.jpg" height={50} alt="" loading="lazy" style={{marginRight:'1em'}}/>
    </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item text-white">
           
          <div className="dropdown">
  <button className="btn btn-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight:'1em'}}>
    Movies
  </button>
  <ul className="dropdown-menu"  style={{ textAlign: "center", listStyle: "none" }}>
    <li><Link to="/movies/popular" style={{textDecoration:"none", color:"black" }}>Popular</Link></li>
    <div className='dropdown-divider'></div>
    <li><Link to="/movies/now_playing" style={{textDecoration:"none",color:"black"}}>Now Playing</Link></li>
    <div className='dropdown-divider'></div>
    <li><Link to="/movies/top_rated" style={{textDecoration:"none",color:"black"}}>Top Rated</Link></li>
    <div className='dropdown-divider'></div>
    <li><Link to="/movies/upcoming" style={{textDecoration:"none",color:"black"}}>Upcoming</Link></li>
  </ul>
</div>
          </li>
          <li className="nav-item">
          <div className="dropdown ">
  <button className="btn btn-dark mr-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight:'1em'}}>
    TV List
  </button>
  <ul className="dropdown-menu"  style={{ textAlign: "center", listStyle: "none"}}>
    <li><Link to="/tv/popular" style={{textDecoration:"none", color:"black" }}>Popular</Link></li>
    <div className='dropdown-divider'></div>
    <li><Link to="/tv/airing_today" style={{textDecoration:"none",color:"black"}}>Airing Today</Link></li>
    <div className='dropdown-divider'></div>
    <li><Link to="/tv/on_the_air" style={{textDecoration:"none",color:"black"}}>On Tv</Link></li>
    <div className='dropdown-divider'></div>
    <li><Link to="/tv/top_rated" style={{textDecoration:"none",color:"black"}}>Top Rated</Link></li>
  </ul>
</div>
          </li>
          <li className="nav-item">
          <div className="dropdown ">
  <button className="btn btn-dark mr-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    People
  </button>
  <ul className="dropdown-menu"  style={{ textAlign: "center", listStyle: "none"}}>
    <li><Link to="/person/popular" style={{textDecoration:"none", color:"black" }}>Popular</Link></li>
  </ul>
</div>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

</>



  )
}

export default Navbar