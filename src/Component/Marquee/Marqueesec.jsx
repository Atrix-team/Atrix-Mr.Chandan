import React from 'react';
import './Marqueesec.css'

const Marqueesec = () => {
  const Logoimage = [
    { id: 1, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo1.png' },
    { id: 2, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo2.png' },
    { id: 3, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo3.png' },
    { id: 4, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo4.png' },
    { id: 5, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo5.png' },
    { id: 6, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo6.png' },
    { id: 7, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo7.png' },
    { id: 8, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo8.png' },
    { id: 9, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo9.png' },
    { id: 10, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo10.png' },
    { id: 11, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo11.png' },
    { id: 12, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo12.png' },
    { id: 13, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo13.png' },
    { id: 14, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo14.png' },
    { id: 15, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo15.png' },
    { id: 16, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo16.png' },
  ];

  return (
    <div className='marquee-container '>
  <p>OVER 1K+ SOFTWARE BUSINESSES GROWING WITH Atrix IT Solutions</p>
    
    <div className='marquee-2'>
      
      <div className='marquee-content'>
        {Logoimage.map((image) => (
          <div key={image.id} className='marquee-img'>
            <img src={image.img} alt={`Logo ${image.id}`} />
          </div>
        ))}
      
        </div>
        <div  className='marquee-content'>
        {Logoimage.map((image) => (
          <div key={`${image.id}-copy`} className='marquee-img'>
            <img src={image.img} alt={`Logo ${image.id}`} />
          </div>
        ))}
          
      </div>
    </div>
    </div>
  );
};

export default Marqueesec;