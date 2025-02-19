import React from 'react'
import "./WorkCardSlider.css"
import img1 from '../../images/portfolio-card/project4.jpeg'

const WorkCardSlider = () => {
    return (
        <>
            <div className="portfolio-card-container">
                <div className="portfolio-card">
                    <div className="image-and-tag">
                        
                            <ul className='tag' >
                                <li><span>3d Animation</span></li>
                                <li><span>Graphic Design</span></li>
                            </ul>
                    
                        <div className="portfolio-img">
                            <img src={img1} alt="" />
                            <a class="details-btn" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <h4><a href="">Cartoon Bank</a></h4>

                    </div>

                </div>
            </div>

      </>
    )
}

export default WorkCardSlider;