import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function Home({setSearchValue,setMovieDetail}) {
    const [search,setSearch]=useState('');

    const handleInputChange=(event)=>{
        setSearch(event.target.value)
    }

    const handleSearch=()=>{
        setSearchValue(search)
    }
    
    const [trend,setTrend]=useState([])
    const [trendValue,setTrendValue]=useState('day')

    const handleSlider=(event)=>{
        console.log(event.target.checked)
       setTrendValue(event.target.checked?'week':'day')
       console.log({trendValue})
    }
    const getTrendDetails=()=>{
        fetch(`https://api.themoviedb.org/3/trending/all/${trendValue}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res=>res.json())
        .then(json=>setTrend(json.results))
    }
    useEffect(()=>{
        getTrendDetails();
    },[trendValue])
  return (
    <>
    <br/>
 
    <div className="container-fluid  background-home" style={{ 
        backgroundImage: 'url("https://png.pngtree.com/background/20211215/original/pngtree-film-festival-black-atmospheric-background-picture-image_1474206.jpg")' ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '29rem',
        width: '100vw',
        marginLeft:'-2em',
        color: 'white' ,
        }}>
      <h1  style={{paddingTop:"5rem"}}>Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <div className="row height d-flex justify-content-center align-items-center">

                      <div className="col-md-8">

                        <div className="search" style={{marginTop:"-14rem"}} >
                          <input type="text" className="form-control" placeholder="Search for a movie,TV Show..." value={search} onChange={handleInputChange}/>
                          <Link to="/search"><button className="btn btn-primary" onClick={handleSearch}>Search</button></Link>
                        </div>
                        
                      </div>
                      
                    </div>
    </div>
    <br></br>
    <div className='container' > 
    <div className='header'>
        <h3><b>Trending</b></h3>
      <h4>Today</h4>  <label className="switch-container">
<input type="checkbox" onChange={handleSlider}/>
  <span className="slider round"></span>
</label><h4>This Week</h4>
    </div>
<br/>
    <div className="container" style={{border:'2px solid grey',padding:'20px',borderRadius:'10px'}}>
            <div className="row">
                {trend && trend.map((movie, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                      <Link to="/detail" style={{textDecoration:'none'}}><div className="card" onClick={()=>(setMovieDetail(movie.id))}> 
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="No image available"/>
                            <div className="card-body" style={{height:'200px', textOverflow:'ellipsis',overflow:'hidden'}}>
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                            </div>
                        </div></Link>  
                    </div>
                ))}
            </div>
        </div>
        </div>
    </>
  );
}
export default Home;
