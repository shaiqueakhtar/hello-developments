import React from 'react'

function Header() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div className='logo'>
            <div className='container'>
          <a href="/" className='brandName'>
          <img className='logo' src='/assets/images/hello.png' />
          </a>
          </div>
          </div>
          {/* <ul>
            <li><a href="#">Sample Page</a></li>
          </ul> */}
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header