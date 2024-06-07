import { useEffect, useState } from "react";

function PersonDetails({personDetail}) {
    const [displayPerson,setDisplayPerson]=useState('')
    const [cast,setCast]=useState([])
    const getTvDetails=()=>{
        fetch(`https://api.themoviedb.org/3/person/${personDetail}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res=>res.json())
        .then(json=>setDisplayPerson(json))

       
    }

   
    useEffect(()=>{
        getTvDetails();
       
    },[personDetail])
  return (
    <>
    <div className="card mb-3" style={{maxWidth: "75rem"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w500${displayPerson.profile_path}`} className="card-img" alt="No image available"/>
    </div>
    <div className="col-md-8">
      <div className="card-body" style={{textAlign:"left"}}>
        <h1 className="card-title"><b>{displayPerson.name}</b></h1><br></br>
        <h2>Biography:</h2>
        <h5 className="card-text" style={{color:'grey'}}>{displayPerson.biography}</h5><br></br>
        {/* <a href={displayPerson} style={{textDecoration:'none'}}><h4>Read More</h4></a> */}
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default PersonDetails;