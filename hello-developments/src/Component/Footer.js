import React from 'react';



const Footer = () => {
  return (
    <React.Fragment>
    <footer class="site-footer">
    <div class="footer-content">
        <div class="about-section">
            <h5>About</h5>
            <div class="about-text">
                <p>©2022</p>
                <p class="site-title"><a href="https://valojak.com" target="_self" rel="home" aria-current="page">Hello Development</a></p>
            </div>
            <p>A few words about us here.</p>
        </div>
        <div class="information-section">
            <h5>Information</h5>
            <nav class="site-navigation">
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </nav>
        </div>
        <div class="connect-section">
            <h5>Connect</h5>
            <ul class="social-links">
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://twitter.com">Twitter</a></li>
                <li><a href="https://linkedin.com">LinkedIn</a></li>
                <li><a href="https://instagram.com">Instagram</a></li>
                <li><a href="https://youtube.com">YouTube</a></li>
            </ul>
        </div>
        <div class="scroll-top">
            <a href="#">↑</a>
        </div>
    </div>
</footer>
</React.Fragment>

  )
}

export default Footer