import React from 'react';

function Navbar() {
  return (
    <header className="p-10 text-bg-dark ">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex pr-5 text-3xl align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
</svg>
          </a> 

          <ul className="nav col-12 text-3xl col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About Us</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Programs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Coaches</a></li>
          </ul>
          <ul className='nav text-3xl mb-2 justify-content-center'>
          <li><a href="#" className="nav-link px-2 text-white">Contact us</a></li>
          </ul>

          
            
        
        </div>
      </div>
    </header>
  );
}

export default Navbar;
