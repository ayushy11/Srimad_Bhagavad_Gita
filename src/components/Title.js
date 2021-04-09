import React from 'react';
import '../styles/Title.css';
import image from '../assets/image.jpg';

function Title() {
    return (
        <div className="title">
            <img src={image} alt=""/>
            <h2>Śrīmad Bhagavad Gita</h2>
        </div>
    )
}

export default Title;
