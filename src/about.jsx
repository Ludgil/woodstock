import React from 'react';
import Chair from './img/chair.jpg'


const About = () => {
    return  <section className="about">
                <div className="left-about">
                    <div className="color-box"></div>
                    <img src={Chair} alt="chair"/>
                </div>
                <div className="right-about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem suscipit quia nihil explicabo minima nam aliquid eum iure,
                     officiis facere dolorem ab non, 
                     cum mollitia error quasi, ea cupiditate 
                     inventore quibusdam id optio dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, 
                     quaerat. Vero distinctio vitae, explicabo
                    </p>
                    <a href="#">Learn More</a>
                </div>
            </section>;
}

export default About;