import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Tv({setTvDetail}) {
    const {category}=useParams();
    const [tvList, setTvList] = useState([]);

    const getTv = () => {
        fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res => res.json())
        .then(json => setTvList(json.results));
    }

    useEffect(() => {
        getTv();
    }, [category]);
  return (
<>

<div className="container">
            <div className="row">
                {tvList.map((tv, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                       <Link to='/tvdetail' style={{textDecoration:'none'}}> <div className="card" onClick={()=>(setTvDetail(tv.id))} >
                            {tv.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className="card-img-top" alt={`Movie ${index}`}/>) : 
                            ( <div className="card-img-top text-center">No Image</div>)}
                            <div className="card-body"  style={{height:'200px', textOverflow:'ellipsis',overflow:'hidden'}}>
                                <h5 className="card-title">{tv.name}</h5>
                                <p className="card-text">{tv.overview}</p>
                            </div>
                        </div></Link>
                    </div>
                ))}
            </div>
        </div>

</>

  )
}

export default Tv;