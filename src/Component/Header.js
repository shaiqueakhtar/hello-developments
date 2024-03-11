import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div className='logo'>
          <div className='logo-container'>
            <div className='brand-logo'>
               <a href="/" className='brandName'>
                <img className='logo-image' src='/assets/images/hello.png' alt="Hello Logo" />
               </a>
           </div>
         <div className='about-us'>
           <Link to="/about">About US</Link>
        </div>
        </div>

            </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
