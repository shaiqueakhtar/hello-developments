import React from 'react'
import {useRef } from "react";

function Main() {
  const paragraphRef = useRef(null);
  return (
        <React.Fragment>
          <main>
            <section className="mainBanner">
              <div className='container'>
                <h1 className='bannerHeading'>DRIVING DIGITAL REVOLUTION FOR BUSINESSES</h1>
              </div>
              <div className='matter'>
                <div className='container'>
                <p>They matter</p><br />
                <span>We guarantee them</span>
                </div>
                </div>
                <div className='matter-text'>
                  <div className='container'>               
                  <p>
                  Our unique approach centers on a pay-on-results basis, encapsulating our <br />
                  confidence in our ability to generate value for you. This means our earnings are <br />
                  directly tied to your success: only after you make money, do we make money.</p>
                  </div>
                  <div className='matter-btn'>
                    <button className='btn btn-primary' type='button' onClick={() =>
          window.scrollTo({
            top: paragraphRef.current.offsetTop,
            behavior: "smooth"
          })
        }
        >Book A Discovery Call</button>
                  </div>
                  </div>
                  </section>
            
            <section className='threeColumn'>
              <div className='container-fluid'>
                <div className="row">
                  <div className="col-md-3">
                    <div className="column-container column-one">
                    <img src='/assets/images/1O.webp' />
                     <h2 className='column-heading'>Social Media</h2> 
                      <p>Lorem ispum dolor</p>
                     <span>CREATIVE</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-two">
                    <i class="fa-regular fa-globe-pointer"></i>
                    <h2 className='column-heading'>Website Development</h2> 
                    <p>Sit amet consectetur</p>
                    <span>PRACTICAL</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-three">
                      <h2 className='column-heading'>Perfomance Marketing</h2>
                        <p>Adipiscing elit mollis</p>
                        <span>ENGAGING</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-four">
                    <i class="fa-solid fa-camera"></i>
                      <h2 className='column-heading'>Photography</h2>
                        <p>Adipiscing elit mollis</p>
                        <span>ENGAGING</span>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div className="column-container column-five">
                      <h2 className='column-heading'>SEO</h2>
                        <p>Adipiscing elit mollis</p>
                        <span>ENGAGING</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-six">
                      <h2 className='column-heading'>Application Development</h2>
                        <p>Adipiscing elit mollis</p>
                        <span>ENGAGING</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-seven">
                    <i class="fa-solid fa-file-contract"></i>
                      <h2 className='column-heading'>Branding</h2>
                        <p>Adipiscing elit mollis</p>
                        <span>ENGAGING</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-eight">
                    📱
                      <h2 className='column-heading'>E-Commerce strategy & execution</h2>
                        <p>Adipiscing elit mollis</p>
                        <span>ENGAGING</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="content">
            <div className="container">
        <div className="group">
            <h2>Bring your ideas to life</h2>
        </div>
        <p>Dignissim cubilia vestibulum erat torquent primis auctor, suscipit sapien <br />egestas tortor ligula bibendum gravida.</p>
        <div className="spacer"></div>
        <div className="buttons">
            <button className="btn btn-secondary">GET IN TOUCH</button>
        </div>
    </div>
    <figure>
        <img src="/assets/images/butterflies.png" alt="" />
    </figure>
            </div>

            <div className='contact-us' ref={paragraphRef} >
              <div className='container'>
              <h2>Contact Us</h2>
                  <div className='form'>
                    <div className='name'>
                  <input type="text" placeholder='Name' />
                  </div>
                  <div className='email'>
                  <input type="email" placeholder='Email' />
                  </div>
                  <div className='phone'>
                  <input type="text" placeholder='Phone Number' />
                  </div>
                  <div className='subject'>
                  <input type="text" placeholder='Subject' />
                  </div>
                  <div className='Message'>
                  <textarea type="text" placeholder='Message' />
                  </div>

                  <div className='matter-btn'>
                    <button className='btn btn-primary' type='button'>Submit</button>
                  </div>

                  </div>
                   </div>
                    </div>
                    
                     <div className='laptop-text'>
                      <div className="container">
                        <figure>
                          <img src="assets/images/laptop.jpg" alt="" />
                          </figure>
                          <div class="content-text">
                            <h2 className='content-heading'>Get free SEO analysis</h2>
                            <p>See how your SEO efforts are doing with an unbiased SEO analysis from our SEO experts.</p>
                            <p>MAYBE A BYLINE HERE…</p>
                            <div className='seo-btn'>
                              <button className='btn btn-seo' type='button'>Get Free SEO Support</button>
                  </div>
               </div>
               </div>
               </div>

              <div className='clients'>
                <div className="container">
                  <h2 className='our-clients'>OUR CLIENTS</h2>
                  <hr />
                  </div>
                  </div>
                  
                  <div className="team-container">
                    <div className="team-member">
                      <div className="team-image">
                        <img src="/assets/images/dev.png" alt="" />
                        </div>
                        <h5>Tom Logan</h5>
                        <p>CEO</p>
                        <p>Lorem ipsum dolor</p>
                        </div>

    <div className="team-member">
        <div className="team-image">
            <img src="/assets/images/digital-marketer.png" alt="" />
        </div>
        <h5>Nikki Hollis</h5>
        <p>Marketing</p>
        <p>Sit amet consectetur</p>
    </div>

    <div className="team-member">
        <div className="team-image">
            <img src="/assets/images/graphic-designer.png" alt="" />
        </div>
        <h5>Martin Bishop</h5>
        <p>Creativity</p>
        <p>Adipiscing elit mollis</p>
    </div>

    <div className="team-member">
        <div className="team-image">
            <img src="/assets/images/web-dev.png" alt="" />
        </div>
        <h5>Emma Bradford</h5>
        <p>Support</p>
        <p>Egestas curae platea</p>
    </div>
</div>
<div className='team-button'>
    <button class="btn team-btn">Read More About Us</button>
</div>

<div className="blog-container">
    <hr className="separator" />
    <h2 className="blog-heading">Latest From Our Blog</h2>
    <div className="social-links-container">
        <ul className="social-links">
            <li></li>
        </ul>
    </div>
    <p className="blog-subscribe">Subscribe today and never miss a thing.</p>
</div>

<div className="query-container">
    <ul className="post-list">
        <li className="post">
            <div className="post-content">
                <figure className="post-image">
                    <img src="/assets/images/post-placeholder.png" alt="Post Placeholder Image" />
                </figure>
                <h2 className="post-title"><a href="/" target="_self">Hello world!</a></h2>
            </div>
        </li>
    </ul>
</div>

            </main>
        </React.Fragment>
  )
}

export default Main