import { useEffect, useState } from "react";

function MovieDetail({movieDetail}) {
    const [displayMovie,setDisplayMovie]=useState('')
    const [cast,setCast]=useState([])
    const getMovieDetails=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieDetail}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res=>res.json())
        .then(json=>setDisplayMovie(json))
    }

    const getCast=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieDetail}/credits?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res=>res.json())
        .then(json=>setCast(json.cast))
    }
    useEffect(()=>{
        getMovieDetails();
        getCast();
    },[movieDetail])
  return (
    <>
   
    <div className="card mb-3" style={{maxWidth: "75rem"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
    <p>{movieDetail}</p>
      <img src={`https://image.tmdb.org/t/p/w500${displayMovie.poster_path}`} className="card-img" alt="No image available"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{displayMovie.title}</h5>
        <p className="card-text">{displayMovie.overview}</p>
        <p className="card-text">{displayMovie.release_date}</p>
      </div>
    </div>
  </div>
</div>
<br/>
<div className="container">
    <div className="row">
        {cast && cast.map((item,index)=>(
             <div className="col md-4 mb-3" key={index}>
             <div className="card">
                 <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className="card-img-top" alt="Image not found"/>
                 <div className="card-body">
                <h5 className="card-title"><b>{item.original_name}</b></h5>
                <p className="card-text">{item.character}</p>
                </div>
            </div>
            </div>
        ))}
    </div>
   </div>
    </>
  )
}

export default MovieDetail;