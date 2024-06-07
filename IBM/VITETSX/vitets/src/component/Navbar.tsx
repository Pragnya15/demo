// import { Link } from 'react-router-dom';

// const NavBar = () => {
//  return (
//  <nav>
//        <ul>
//           <li>
//              <Link to="/">Home</Link>
//           </li>
//           <li>
//              <Link to="/category/business">Business</Link>
//           </li>
//           <li>
//              <Link to="/category/sports">Sports</Link>
//           </li>
//           <li>
//              <Link to="/category/entertainment">Entertainment</Link>
//           </li>
           
//        </ul>
//  </nav>
//  );
// };

// export default NavBar;





// import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (    
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/category/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/entertainment">Entertainment</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        </>
    );
}

export default Navbar;
