import React from 'react'
import "./hero.css"
import TypeWriterComponent from "../TypeWriterEffect/type"

export const HeroSection = () => {
  return (
    <div className='Hero-sec-bg' >

      <div className="haeading-text">
        <div className="haeading-text-1">
          <h1>We deliver <p className='bouncing-text1' >Marketing </p>  </h1>
        </div>
        <div className="haeading-text-2"><h1 className='bouns-text-h1'> personal <p className='bouncing-text2' >Web Development</p> <div className="type-writer-border"><TypeWriterComponent /> </div> </h1> </div>
        <div className="haeading-text-3">
          <h1>solutions <p className='bouncing-text3' > Brand Identity </p>  </h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores perferendis, dignissimos consequuntur odio unde quasi repudiandae et non officia! Cumque placeat provident ratione fugiat quibusdam ducimus perspiciatis expedita? Deserunt.</p>

      </div>
      
     
    </div>
  )
}
