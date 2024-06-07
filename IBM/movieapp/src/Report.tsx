import { useEffect, useState } from "react";
function Report(){
    const [movieData, setMovieData]=useState([]);
    const getReport=()=>{
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d')
        .then(res=>res.json())
        .then(json=>setMovieData(json.results))
    }

    useEffect(()=>{
        getReport();
    },[])

    const countGenres = () => {
        const genreCounts = {};
    
        movieData.forEach(movie => {
          movie.genre_ids.forEach(genreId => {
            genreCounts[genreId] = (genreCounts[genreId] || 0) + 1;
          });
        });
    
        return genreCounts;
      };
    return(
        <>
            
        </>


    );
}
export default Report;