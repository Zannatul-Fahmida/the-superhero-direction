import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './HireChef.css';

const HireChef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=> {
        fetch('./chefs.json')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, []);

    return (
        <div>
            <div className="hireChef-container">
                <div className="chefs-container">
                    {
                        chefs.map(chef => <Chef
                        key = {chef.id}
                        chef = {chef}
                        ></Chef>)
                    }
                </div>
                <div className="cart-container">

                </div>
            </div>
        </div>
    );
};

export default HireChef;