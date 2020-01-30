import React from 'react';
import imgWood1 from './img/imgWood1.png';
import imgWood2 from './img/imgWood2.png';


const Home = () => {
    return  <section className="home">
                <div className="img-content-home">
                    <img src={imgWood1} alt="woods"/>
                    <img src={imgWood2} alt="woods2"/>
                </div>
                <h1>WoodStock</h1>
             
            </section>;
}

export default Home;