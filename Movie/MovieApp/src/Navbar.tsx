import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg fixed-top gradient-custom">
    <div className="container-fluid">
    <Link to="/">  
          <img src="https://static.firecore.com/images/blog/infuse71-tmdb_2x.jpg" height={50} alt="" loading="lazy" />
    </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item text-white">
           
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Movies
  </button>
  <ul className="dropdown-menu"  style={{ textAlign: "center", listStyle: "none", }}>
    <li><Link to="/movies/popular" style={{textDecoration:"none", color:"black" }}>Popular</Link></li><hr/>
    <li><Link to="/movies/top_rated" style={{textDecoration:"none",color:"black"}}>Top Rated</Link></li>
  </ul>
</div>
          </li>
          <li className="nav-item">
          <a className="nav-link text-white" href="#">
              TV List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              People
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              My List
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</>



  )
}

export default Navbar