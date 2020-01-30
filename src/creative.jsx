import React from 'react';
import Desk from './img/desk.jpg';


const Creative = () => {
    return  <section className="creative">
                <div className="left-creative">
                    <img src={Desk} alt="desk"/>
                </div>
                <div className="right-creative">
                    <h2 className="title-block">Creative team</h2>
                    <h2>Good Mindset</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem suscipit quia nihil explicabo minima nam aliquid eum iure,
                     officiis facere dolorem ab non, 
                     cum mollitia error quasi, ea cupiditate 
                     inventore quibusdam id optio dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, 
                     quaerat. Vero distinctio vitae, explicabo
                    </p>
                    <a href="#">Meet the team</a>    
                </div>
            </section>;
}

export default Creative;