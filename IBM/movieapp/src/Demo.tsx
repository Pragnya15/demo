import React, { useEffect, useState } from 'react';

function Demo() {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d')
        .then(res => res.json())
        .then(json => setMovieList(json.results));
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        // <div> 
        //     {movieList.map((movie, index) => (
        //         <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie ${index}`} />
        //     ))}
        // </div>
        <>
        <div className="d-flex">
  <div className="card mr-3" style={{ width: "18rem" }}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title 1</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
</div>


        
        
        </>
    );
}

export default Demo;
