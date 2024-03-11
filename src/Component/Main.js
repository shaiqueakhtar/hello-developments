import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";

import {useRef } from "react";

function Main() {
  const paragraphRef = useRef(null);
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [phone, setPhone] = useState('') // useState to store Email address of the user
  const [subject, setSubject] = useState('') // useState to store Email address of the user
  const [message, setMessage] = useState('') // useState to store Email address of the user


  const notifySuccess = (msg) =>
  toast(msg, {
    type: "success",
    position: "top-right",
  });

    function validateForm() 
    {
      document.querySelectorAll(".text-danger").forEach(el => el.remove());
       var error = false;
      var elements = document.querySelectorAll('input,textarea');
      for (var i=0; i<elements.length; i++)
      {
        if(elements[i].value=='')
        {
          var new_row = document.createElement("span");
           new_row.className = "text-danger";
           new_row.innerHTML = " Input is required";
          elements[i].after(new_row)
          error = true;
        }
      }
     
      if(!error)
      {
      // Using Fetch API
fetch('https://hellodevelopments.com/api/', {
  method: 'POST',
  body: JSON.stringify(
    {
    "name" : firstName,
    "email" : email,
    "phone" : phone,
    "subject" : subject,
    "message" : message
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
   .then((response) => response.json())
   .then((data) => {
    notifySuccess("Enquiry sent successfully.");
      // Handle data
   })
   .catch((err) => {
      console.log(err.message);
   });

    
      }

    }

    

  return (
        <React.Fragment>
          <main>
            <section className="mainBanner">
              <div className='container'>
                <h1 className='bannerHeading'>DRIVING DIGITAL REVOLUTION FOR BUSINESSES</h1>
              </div>
              <div className='matter'>
                <div className='container'>
                <span>Our guarantee</span>
                </div>
                </div>
                <div className='matter-text'>
                  <div className='container'>               
                  <p>
                  We believe we can create value for you, which is why we have a unique approach  <br />
                  that is based on a pay-on-results premise. That implies that we only profit when you do, <br />
                   and that our income is therefore closely linked to your success.</p>
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
              <h2 className='columnHeading'>Our Expertise</h2>
              <div className='container-fluid'>
                <div className="row">
                  <div className="col-md-3">
                    <div className="column-container column-one">
                    <img className='social-icons' src='/assets/images/1O.webp' />
                     <h2 className='column-heading'>Social Media</h2> 
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-two">
                    <img className='social-icons' src='/assets/images/2O.webp' />
                    <h2 className='column-heading'>Website Development</h2> 
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-three">
                    <img className='social-icons' src='/assets/images/6O.webp' />
                      <h2 className='column-heading'>Perfomance Marketing</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-four">
                    <img className='social-icons' src='/assets/images/5O.webp' />
                      <h2 className='column-heading'>Photography</h2>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div className="column-container column-five">
                    <img className='social-icons' src='/assets/images/3O.webp' />
                      <h2 className='column-heading'>SEO</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-six">
                    <img className='social-icons' src='/assets/images/4O.webp' />
                      <h2 className='column-heading'>Application Development</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-seven">
                    <img className='social-icons' src='/assets/images/branding.webp' />
                      <h2 className='column-heading'>Branding</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="column-container column-eight">
                    <img className='social-icons' src='/assets/images/8O.webp' />
                      <h2 className='column-heading'>E-Commerce strategy & execution</h2>    
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
                  <input type="text" placeholder='Name' onChange={(e) => setFirstName(e.target.value)}/>
                  </div>
                  <div className='email'>
                  <input type="email" placeholder='Email'  onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className='phone'>
                  <input type="text" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                  <div className='subject'>
                  <input type="text" placeholder='Subject' onChange={(e) => setSubject(e.target.value)}/>
                  </div>
                  <div className='Message'>
                  <textarea type="text" placeholder='Message'  onChange={(e) => setMessage(e.target.value)}/>
                  </div>
                  <div className='matter-btn'>
                    <button type="button" className='btn btn-primary' onClick={() => {
            validateForm()
          }}>Submit</button>
                  </div>

                  </div>
                   </div>
                    </div>
                    
                     <div className='laptop-text'>
                      <div className="container">
                        <figure>
                          <img src="assets/images/laptop.jpg" alt="" />
                          </figure>
                          <div className="content-text">
                            <h2 className='content-heading'>Get free SEO analysis</h2>
                            <p>See how your SEO efforts are doing with an unbiased SEO analysis from our SEO experts.</p>
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
                        <img src="/assets/images/chinarkari.jpeg" alt="" />
                        </div>
                        <h5>CHINARKARI</h5>
                        <p>Artisans of Aari</p>
                        </div>

    <div className="team-member">
        <div className="team-image">
            <img src="/assets/images/redixpress.jpeg" alt="" />
        </div>
        <h5>REDIXPRESS</h5>
        <p>LOGISTICS</p>
    </div>

    <div className="team-member">
        <div className="team-image">
            <img src="/assets/images/shock & swoon.jpeg" alt="" />
        </div>
        <h5>SHOCK & SWOON</h5>
    </div>

    <div className="team-member">
        <div className="team-image">
            <img src="/assets/images/travelforwild.jpeg" alt="" />
        </div>
        <h5>TRAVEL FOR WILD</h5>
        <p>GO WILD</p>
    </div>
</div>
<div className='team-button'>
    <button class="btn team-btn">Read More About Us</button>
</div>

<div className="blog-container">
    <hr className="separator" />
    <div className="social-links-container">
        <ul className="social-links">
            <li></li>
        </ul>
    </div>
</div>


            </main>
        </React.Fragment>
  )
}

export default Main