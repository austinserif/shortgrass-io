import React from 'react';
import '../styles/Home.css';
import image from '../DJI_0438.jpg';

const Home = () => {
    return (
        <div className="Home">
            <img alt="" src={image}/>
        </div>
    );
}

export default Home;