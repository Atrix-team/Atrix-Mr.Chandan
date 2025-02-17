import React from 'react';
import "./Scards.css";
import Icon1 from '../../images/Scard-img/Icon1.svg'
import Icon2 from '../../images/Scard-img/Icon2.svg'
import Icon3 from '../../images/Scard-img/Icon3.svg'
import Icon4 from '../../images/Scard-img/Icon4.svg'

const Scards = () => {
    const Scard = [
        {
            img: Icon1,
            text: 'Discovery and Consultation.',
            textp: 'Understand the client s goals, challenges, and requirements through initial meetings and consultations.',
            list: ['Client Meeting.', 'Needs Assessment', 'Strategic Planning.']
        },
        {
            img: Icon2,
            text: 'Discovery and Consultation.',
            textp: 'Understand the client s goals, challenges, and requirements through initial meetings and consultations.',
            list: ['Client Meeting.', 'Needs Assessment', 'Strategic Planning.']
        },
        {
            img: Icon3,
            text: 'Discovery and Consultation.',
            textp: 'Understand the client s goals, challenges, and requirements through initial meetings and consultations.',
            list: ['Client Meeting.', 'Needs Assessment', 'Strategic Planning.']
        },
        {
            img: Icon4,
            text: 'Discovery and Consultation.',
            textp: 'Understand the client s goals, challenges, and requirements through initial meetings and consultations.',
            list: ['Client Meeting.', 'Needs Assessment', 'Strategic Planning.']
        },


    ]

    return (
        <>
            <div className="Proccess-sec">
                <div className="Proccess-sec-hadding">
                    <h1><strong>Our Solution</strong></h1>
                    <h1>Proccess</h1>
                </div>
                <div className="Proccess-sec-hadding2">
                    <p>Digital agencies can vary in size and
                        specialization. Some may focus on specific
                        niches, such as healthcare or e-commerce,
                        while others may offer a comprehensive.</p>
                </div>

            </div>


            <div className="Scard-container">
                <div className="scard-left">

                    <div id="circle-sec" class="process-circle">
                        <div id="circle-wrapper" class="circle-wrapper">
                            <div class="circle-content">
                                <p class="step-text">Step</p>
                                <p class="step-number">1/4</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="scard-right">
                    {
                        Scard.map((item) => (
                            <div className='Scard' >
                                <div className="Scard-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="Scard-text">
                                    <h4>{item.text}</h4>
                                    <p>{item.textp}</p>
                                    <ul>
                                        {item.list.map((listitem) => (
                                            <li>{listitem}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Scards;