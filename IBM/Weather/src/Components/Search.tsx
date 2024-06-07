import { useState } from "react";
import { Link } from "react-router-dom";
import './Search.css';

const Search = ({setSearchValue}) => {


    const [search,setSearch]=useState('');
    const handleInputChange=(event)=>{
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    const handleSearch=()=>{
        setSearchValue(search);
    }
  return (
    
        <>
        <div className="container" style={{width:'40rem', height:'20rem'}}>
     <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Bhubaneswar</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>setSearchValue('Kolkata')}>Kolkata</a></li>
    <li><a className="dropdown-item" href="#">Shimla</a></li>
  </ul>
</div>
<div className="search-box">
<div className="input-group">
  <div className="form-outline" data-mdb-input-init>
    <input type="search" id="form1" className="form-control" value={search} onChange={handleInputChange}/>
  </div>
  <Link to='/weather'><button type="button" className="btn btn-primary" >
   Search
  </button></Link>
</div>
</div>
</div>
        </>
  );
};
export default Search;
