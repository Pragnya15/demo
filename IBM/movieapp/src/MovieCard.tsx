import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function MovieCard({setMovieDetail}) {
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
                       <Link to='/detail' style={{textDecoration:'none'}}> <div className="card" onClick={()=>(setMovieDetail(movie.id))}>
                            {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={`Movie ${index}`}/>) : 
                            ( <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-177641087.jpg"/>)}
                            <div className="card-body"  style={{height:'200px', textOverflow:'ellipsis',overflow:'hidden'}}>
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                            </div>
                        </div></Link>
                    </div>
                ))}
            </div>
        </div>

</>

  )
}

export default MovieCard