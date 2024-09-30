import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
function Navbar() {
  return (
    <header className="p-10 text-bg-dark ">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex pr-5 text-3xl align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
              <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
              <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
          </Link>

          <ul className="nav col-12 text-3xl col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/page3" className="nav-link px-2 text-white">Home</Link></li>
            <li><Link to="/page1" className="nav-link px-2 text-white">About Us</Link></li>
            <li><Link to="/page2" className="nav-link px-2 text-white">Programs</Link></li>
            <li><Link to="/page4" className="nav-link px-2 text-white">Coaches</Link></li>
          </ul>
          
          <ul className="nav text-3xl mb-2 justify-content-center">
            <li><Link to="/page5" className="nav-link px-2 text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
