import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Chef from '../Chef/Chef';
import './HireChef.css';

const HireChef = () => {
    const [chefs, setChefs] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./chefs.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);

    const handleAddToCart = chef => {
        const newCart = [...cart, chef];
        setCart(newCart);
    }
    return (
        <div>
            <div className="hireChef-container">
                <div className="chefs-container">
                    {
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                            handleAddToCart={handleAddToCart}
                        ></Chef>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default HireChef;