import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TvDetails({tvDetail,setPersonDetail}) {
    const [displayTv,setDisplayTv]=useState('')
    const [cast,setCast]=useState([])
    const getTvDetails=()=>{
        fetch(`https://api.themoviedb.org/3/tv/${tvDetail}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res=>res.json())
        .then(json=>setDisplayTv(json))

       
    }

    const getCast=()=>{
        fetch(`https://api.themoviedb.org/3/tv/${tvDetail}/credits?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res=>res.json())
        .then(data=>setCast(data.cast))
    }
    useEffect(()=>{
        getTvDetails();
        getCast();
    },[tvDetail])
  return (
    <>
    <div className="card mb-3" style={{maxWidth: "75rem"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w500${displayTv.poster_path}`} className="card-img" alt="No image available"/>
    </div>
    <div className="col-md-8">
      <div className="card-body" style={{textAlign:"left"}}>
        <h1 className="card-title"><b>{displayTv.name}</b></h1>
        { displayTv && displayTv.genres.map((item,index)=>(<h5 key={index} style={{display:'inline', marginRight:'15px'}}>{item.name}</h5>))} 
       {/* { console.log(displayTv.genres)} */}
        <p><i>{displayTv.tagline}</i></p><br/>
        <h2>Overview:</h2>
         <h5 className="card-text" style={{color:'grey'}}>{displayTv.overview}</h5><br></br>
         <h3>On Air Date:</h3>
        <h5 className="card-text" style={{color:'grey'}}>{displayTv.first_air_date}</h5>
      </div>
    </div>
  </div>
</div>

<div className="container">
<h2>Casts</h2>
    <div className="row">
        {cast && cast.map((item,index)=>(
             <div className="col md-4 mb-3" key={index}>
          <Link to='/persondetail' style={{textDecoration:'none'}}> <div className="card" onClick={()=>(setPersonDetail(item.id))}>
                 <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className="card-img-top" alt="Image not found" />
                 <div className="card-body">
                <h5 className="card-title"><b>{item.original_name}</b></h5>
                <p className="card-text">{item.character}</p>
                </div>
            </div></Link>
            </div>
        ))}
    </div>
   </div>
    </>
  )
}

export default TvDetails;