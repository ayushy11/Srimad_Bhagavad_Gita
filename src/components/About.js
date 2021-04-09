import React from 'react';
import '../styles/About.css';
import img from '../assets/img3.png';

function About() {
    return (
        <>
            <div className="about">
                <div className="about__content">
                    <h2>Śrīmad Bhagavad Gita</h2>
                    <p>Read, study and recite Śrīmad Bhagavad Gita in a simple and beautiful interface. Bhagavad Gita - "The Song of The Lord" is a practical guide to one's life that guides you to re-organise your life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality).</p>
                </div>
                <div className="about__img">
                    <img src={img} alt="" />
                </div>
            </div>

        </>
    );
};

export default About;
