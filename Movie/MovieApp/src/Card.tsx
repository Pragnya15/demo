import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Card() {
    const {category}=useParams();
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res => res.json())
        .then(json => setMovieList(json.results));
    }

    useEffect(() => {
        getMovie();
    }, [category]);
  return (
<>

<div className="container">
            <div className="row">
                {movieList.map((movie, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card">
                            {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={`Movie ${index}`}/>) : 
                            ( <div className="card-img-top text-center">No Image</div>)}
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

</>

  )
}

export default Card