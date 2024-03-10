import React from 'react';



const Footer = () => {
  return (
    <React.Fragment>
    <footer className="site-footer">
    <div className="footer-content">
        {/* <div className="about-section">
            <h5>About</h5>
            <div className="about-text">
            </div>
            <p>Hello Developments concentrated on operating as a new age media group and providing value-added innovations.</p>
        </div> */}
        <div className="information-section">
            <h5>Information</h5>
            <nav className="site-navigation">
                <ul>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">News</a></li>
                </ul>
            </nav>
        </div>
        <div className="connect-section">
            <h5>Connect</h5>
            <ul className="social-links">
                <li><a href='https://www.facebook.com/profile.php?id=61556802254625'><i className="fa-brands fa-facebook"></i></a></li>
                {/* <li><a href='/'><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href='/'><i className="fa-brands fa-linkedin"></i></a></li> */}
                <li><a href='https://www.instagram.com/hello_developments/'><i className="fa-brands fa-instagram"></i></a></li>
                {/* <li><a href='/'><i className="fa-brands fa-youtube"></i></a></li> */}
            </ul>
        </div>
   

    <div className="information-section">
            <h5>Contact Info</h5>
            <nav className="site-navigation">
                <ul>
                    <li><i className="fa-solid fa-location-dot"></i> <a href="#"></a> 
                        Shop Number-116 Natvar Lal Mandir Hawa Mahal Road Near Mahila Thana, <br />
                        Jaipur- 302002</li>
                    <li><i className="fa-solid fa-phone"></i> <a href="#">+91 78775 99689</a></li>
                    {/* <li><i className="fa-solid fa-message"></i> <a href="#">helloworld.com</a></li> */}
                </ul>
            </nav>
        </div>
        </div>
</footer>
</React.Fragment>

  )
}

export default Footer