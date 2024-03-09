import React from 'react';



const Footer = () => {
  return (
    <React.Fragment>
    <footer className="site-footer">
    <div className="footer-content">
        <div className="about-section">
            <h5>About</h5>
            <div className="about-text">
                <p>©2022 <a href="/" target="_self" rel="home" aria-current="page">Hello Development</a></p>
            </div>
            <p>A few words about us here.</p>
        </div>
        <div className="information-section">
            <h5>Information</h5>
            <nav className="site-navigation">
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </nav>
        </div>
        <div className="connect-section">
            <h5>Connect</h5>
            <ul className="social-links">
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
            </ul>
        </div>
        <div className="scroll-top">
            <a href="#">↑</a>
        </div>
    </div>
</footer>
</React.Fragment>

  )
}

export default Footer