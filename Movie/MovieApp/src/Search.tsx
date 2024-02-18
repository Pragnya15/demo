import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Search({searchValue,setMovieDetail}) {


const [searchList, setSearchList]=useState([])

const getSearch=()=>{
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d&query=${searchValue}`)
    .then(res=>res.json())
    .then(json=>setSearchList(json.results))
}
useEffect(()=>{
    if(!searchValue)return;
    getSearch();
},[searchValue])


  return (
   <div className="container">
    <div className="row">
        {searchList.map((item,index)=>(
             <div className="col md-4 mb-3" key={index}>
             <Link to="/detail" style={{textDecoration:"none"}}><div className="card" onClick={()=>(setMovieDetail(item.id))}>
                 <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="Image not found"/>
                 <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.overview}</p>
                </div>
            </div></Link>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Search