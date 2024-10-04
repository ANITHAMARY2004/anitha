import React from 'react';
import './home.css';
import image from '../components/images/aniimage.jpg';
const Home = () => {
    return (
       <div className="home">
        <div classname="na">
        <center><h1>Hello </h1>
        <h2>I'M ANITHA</h2></center>
        <img src={image} alt='anitha' className='img' />
      
        <p className="ani">Welcome to my corner of the internet! This is the place where I write about 
                inspirational stories that motivate and uplift. I believe in the power of storytelling 
                to connect people and ignite positive change. Join me on this journey of inspiration 
                and discovery as we explore stories that inspire hope and resilience.</p>
        
        </div>
        </div>
    );
};
export default Home;