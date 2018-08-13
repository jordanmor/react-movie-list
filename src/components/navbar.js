import React from 'react';

const NavBar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#">Vidly</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Customers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Rentals</a>
          </li>
        </ul>
      </div>
    </nav>
   );
}
 
export default NavBar;