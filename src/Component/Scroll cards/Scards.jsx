import React from "react";
import "./Scards.css";
import Icon1 from '../../images/Scard-img/Icon1.svg'
import Icon2 from '../../images/Scard-img/Icon2.svg'
import Icon3 from '../../images/Scard-img/Icon3.svg'
import Icon4 from '../../images/Scard-img/Icon4.svg'
import { useEffect, useState } from "react";

const Scards = () => {
    const [stepNum, setStepNum] = useState(0);

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
    ];

    useEffect(() => {
        const handleScroll = () => {
            const children = document.querySelectorAll(".process-card");
            let activeStep = 0;

            children.forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                if (rect.top <= 100) {
                    activeStep = index + 1;
                }
            });

            setStepNum(activeStep);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        const circleAnimation = () => {
            let circleWrapper = document.getElementById('circle-wrapper')
            let cardWrapper = document.getElementById('process-cards')
            let allCardValues = cardWrapper.getBoundingClientRect();
            // console.log("card wrapper:", allCardValues);
            let cardHeight = allCardValues.height
            let currectPos = allCardValues.top
            // console.log("card height", cardHeight)
            // console.log("current position", currectPos)
            const percentage = -(Math.floor((currectPos / cardHeight) * 100))
            // console.log("percentage", percentage)
            circleWrapper.style.background = `conic-gradient(#2F2F2F ${percentage + 20}%, #1A1A1A 0%)`;
        }
        window.addEventListener("load", circleAnimation)
        window.addEventListener("scroll", circleAnimation)

        return () => {
            window.removeEventListener("load", circleAnimation);
            window.removeEventListener("scroll", circleAnimation);
        };

    }, []);

    useEffect(() => {
        const circleAnimation = () => {
            const circleWrapper = document.getElementById('circle-wrapper');
            const cardWrapper = document.getElementById('process-cards');
            const allCardValues = cardWrapper.getBoundingClientRect();
            const cardHeight = allCardValues.height;
            const currectPos = allCardValues.top;
            const percentage = -(Math.floor((currectPos / cardHeight) * 100));

            // Dynamically update the circle background with conic-gradient
            if (circleWrapper) {
                circleWrapper.style.background = `conic-gradient(#2F2F2F ${percentage + 20}%, #1A1A1A 0%)`;
            }
        };

        window.addEventListener("scroll", circleAnimation);
        window.addEventListener("load", circleAnimation);

        return () => {
            window.removeEventListener("scroll", circleAnimation);
            window.removeEventListener("load", circleAnimation);
        };
    }, []);


    return (
        <>
            <div className="container" id="Proccess-sec">
                <div className="Proccess-sec-hadding">
                    <h1><strong>Our Solution</strong></h1>
                    <h1>Proccess</h1>
                </div>
                <div className="Proccess-sec-img ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                        <path fill="#2f2f2f" d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
                    </svg>
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
                    <div id="circle-sec" className="process-circle ">
                        <div
                            id="circle-wrapper"
                            className="circle-wrapper " >
                            <div className="circle-content">
                                <p className="step-text" >Step</p>
                                <p className="step-number" >{stepNum}/4</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scard-right" id="process-cards">
                    {Scard.map((item, index) => (
                        <div
                            className={`Scard process-card ${stepNum === index + 1 ? 'active' : ''}`}
                            key={index}
                        >
                            <div className="Scard-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="Scard-text">
                                <h4>{item.text}</h4>
                                <p>{item.textp}</p>
                                <ul>
                                    {item.list.map((listitem, listIndex) => (
                                        <li key={listIndex}>{listitem}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}

export default Scards;
