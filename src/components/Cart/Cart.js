import React from 'react';
import './Cart.css';

const Cart = props => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const chef of cart) {
        chef.quantity = !chef.quantity ? 1 : chef.quantity;
        total = total + chef.salary * chef.quantity;
        totalQuantity = totalQuantity + chef.quantity;
    }
    return (
        <div className="cart">
            <h2>Chefs added: {totalQuantity}</h2>
            <h3>Total cost: ${total}</h3>
            {
                cart.map(chef => <h4
                    key={chef.id}
                >
                    {chef.name}
                </h4>)
            }
        </div>
    );
};

export default Cart;