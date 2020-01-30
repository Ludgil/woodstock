import React from 'react';
import Chair2 from './img/chair2.jpg'


const Shop = () => {
    return  <section className="shop">
                <div className="left-shop">
                    <h2>Shop</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem suscipit quia nihil explicabo minima nam aliquid eum iure,
                     officiis facere dolorem ab non, 
                     cum mollitia error quasi, ea cupiditate 
                     inventore quibusdam id optio dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, 
                     quaerat. Vero distinctio vitae, explicabo
                    </p>
                    <a href="#">Go shopping</a>
                </div>
                <div className="right-shop">
                    <div className="color-box"></div>
                    <img src={Chair2} alt="chair"/>
                </div>
            </section>;
}

export default Shop;