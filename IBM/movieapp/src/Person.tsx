import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Person({setPersonDetail}) {
    const {category}=useParams();
    const [personList, setPersonList] = useState([]);

    const getTv = () => {
        fetch(`https://api.themoviedb.org/3/person/${category}?api_key=a6ecc7a7e3373d1a9c83ce1715936d7d`)
        .then(res => res.json())
        .then(json => setPersonList(json.results));
    }

    useEffect(() => {
        getTv();
    }, [category]);
  return (
<>

<div className="container">
            <div className="row">
                {personList.map((person, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                       <Link to='/persondetail' style={{textDecoration:'none'}}> <div className="card" onClick={()=>(setPersonDetail(person.id))} >
                            {person.profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} className="card-img-top" alt="No image available"/>) : 
                            ( <div className="card-img-top text-center">No Image</div>)}
                            <div className="card-body"  style={{height:'200px', textOverflow:'ellipsis',overflow:'hidden'}}>
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">{person.overview}</p>
                            </div>
                        </div></Link>
                    </div>
                ))}
            </div>
        </div>

</>

  )
}

export default Person;