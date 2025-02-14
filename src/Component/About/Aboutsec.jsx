import React from 'react'
import "./Aboutsec.css"

const Aboutsec = () => {
  return (
   <>
   <div className="about-us-container">

  <div className="about-us-content">
    <h1 className="about-us-title">About Us</h1>

    <div className="about-us-flex-container">
      <img
        src='https://atrixitsolutions.com/wp-content/uploads/2024/07/20410-1280x732.jpg'
        className="about-us-image"
        alt="Company Image"
      />
      <div className="about-us-text">
        <p className="about-us-vision">Our Vision</p>
        <h5 className="about-us-heading">Unlock Revenue Growth for Your Business</h5>
        <h6 className="about-us-subheading">
          Our goal is to make it as easy as possible for you to walk away with the solution that suits your needs perfectly.
        </h6>
        <hr/>
        <div className="about-us-border"></div>
        <p className="about-us-description">
          Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all
          work best when strategically paired with other channels. This is the main factor that sets us apart from our
          competition and allows us to deliver a specialist business consultancy service.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  </div>
</div>

   
   </>
  )
}

export default Aboutsec;