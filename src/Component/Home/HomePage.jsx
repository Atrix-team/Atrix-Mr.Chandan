import React from 'react'
import { HeroSection } from '../Hero/Hero'
import './HomePage.css'
import Animationsec from '../Hero/Animation'
import Aboutsec from '../About/Aboutsec'
import Servicesec from '../Service/Servicesec'
import Marqueesec from '../Marquee/Marqueesec'
import Cardcon from '../Card-Counter/Cardcon'


export const HomePage = () => {
  return (
    <>
      <div className='Home-container' >
        <div className='Homesec'>
          <div className='Animation-bg'>
            <Animationsec />
          </div>
        </div>
        <HeroSection />
      </div>

      <div className="About-sec">
      <Marqueesec/>
        <Aboutsec/>
        <Servicesec/>
        <Cardcon/>
      </div>

{/*  */}




    </>

  )
}
