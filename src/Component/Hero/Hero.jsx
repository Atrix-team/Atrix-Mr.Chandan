import React, { useEffect } from 'react'
import "./hero.css"
import TypeWriterComponent from "../TypeWriterEffect/type"

export const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.moveWithMouse');

    const moveElements = (e) => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const moveX = (mouseX - (rect.left + rect.width / 100)) / 160;
        const moveY = (mouseY - (rect.top + rect.height / 100)) / 160;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', moveElements);

    return () => {
      window.removeEventListener('mousemove', moveElements);
    };
  }, [])
  return (
    <div className='Hero-sec-bg' >

      <div className="haeading-text">
        <div className="haeading-text-1">
          <h1>We deliver </h1>

          <div className="moveWithMouse">
            <p className='bouncing-text1' >
              Marketing </p>
          </div>

        </div>

        <div className="moveWithMouse">
          <p className='bouncing-text2'> Web Development </p>
        </div>

        <div className="haeading-text-2"><h1 className='bouns-text-h1'> personal </h1>
          <div className="type-writer-border"><TypeWriterComponent /> </div> </div>
          
        <div className="haeading-text-3">
          <h1>solutions  </h1>
          <div className="moveWithMouse">
            <p className='bouncing-text3' > Brand Identity </p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores perferendis, dignissimos consequuntur odio unde quasi repudiandae et non officia! Cumque placeat provident ratione fugiat quibusdam ducimus perspiciatis expedita? Deserunt.</p>

      </div>


    </div>
  )
}
