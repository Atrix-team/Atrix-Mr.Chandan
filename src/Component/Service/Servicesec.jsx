import React, { useEffect, useState, useRef } from 'react';
import './Services.css';
import service1 from '../../images/AboutSection/service-1.png';
import service2 from '../../images/AboutSection/service-2.png';
import service3 from '../../images/AboutSection/service-3.png';
import service4 from '../../images/AboutSection/service-4.png';
import service5 from '../../images/AboutSection/service-5.png';
import service6 from '../../images/AboutSection/service-6.png';
import service7 from '../../images/AboutSection/service-7.png';

const services = [
  {
    title: 'UI-UX Design',
    description: 'As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction.',
    image: service1
  },
  {
    title: 'Mobile Apps',
    description: 'We develop mobile apps that provide seamless user experiences and meet the demands of modern mobile users.',
    image: service2
  },
  {
    title: 'Backend Development',
    description: 'Our backend development ensures the best performance and security for your web and mobile applications.',
    image: service3
  },
  {
    title: 'Frontend Development',
    description: 'We build responsive and dynamic web applications with the latest frontend technologies.',
    image: service4
  },
  {
    title: 'Artificial Intelligence',
    description: 'Our AI services help automate processes and deliver intelligent insights through advanced machine learning models.',
    image: service5
  },
  {
    title: 'Data Analysis & Data Science',
    description: 'We provide data-driven solutions to help businesses extract valuable insights and improve decision-making.',
    image: service6
  },
  {
    title: 'Managed Cloud & DevOps',
    description: 'Our cloud and DevOps solutions provide scalable, reliable, and secure infrastructure for businesses.',
    image: service7
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const windowCenter = windowHeight / 2; 
        cardsRef.current.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
      
        
          if (cardCenter >= windowCenter - 200 && cardCenter <= windowCenter + 200) {
          
            setActiveIndex(index);
            card.style.opacity = '1';
            if (imagesRef.current[index]) {
              imagesRef.current[index].classList.add('active-img');
            }
          } else {
          
            card.style.opacity = '0.2';
            if (imagesRef.current[index]) {
              imagesRef.current[index].classList.remove('active-img');
            }
          }
        });
      };
      
      

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="our-services">
      <div className="services-container">
        <div className="service-heading">
          <h2>Our Services</h2>
        </div>
        <div className="services-wrpr">
          <div className="service-cards">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`service-card service-card-${index + 1}`}
              >
                <h3 className="serv-heading">
                  <span></span> {service.title}
                </h3>
                <p className="serv-desc">{service.description}</p>
                <div className="card-buttons">
                  <a href="#" className="card-btn">Branding</a>
                  <a href="#" className="card-btn">Logo Design</a>
                  <a href="#" className="card-btn">Packaging</a>
                  <a href="#" className="card-btn">UI/UX Design</a>
                  <a href="#" className="card-btn">Print Media</a>
                  <a href="#" className="card-btn">Advertisement</a>
                </div>
              </div>
            ))}
          </div>

          <div className="service-img-wrapr">
            <div className="serve-img-inner-wrapper">
              {services.map((service, index) => (
                <img
                  key={index}
                  ref={(el) => (imagesRef.current[index] = el)}
                  className={`serviceImg ${activeIndex === index ? 'active-img' : ''}`}
                  src={service.image}
                  alt={service.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Services;
