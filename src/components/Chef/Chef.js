import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Chef.css';

const Chef = props => {
    const { name, country, salary, image, specialItem, rating } = props.chef;
    console.log(props);
    return (
        <div className="chef">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p><small>Country: {country}</small></p>
            <h4>Signature Dish: {specialItem}</h4>
            <h4>Salary: ${salary}</h4>
            <p>Rating: {rating} <Rating
                initialRating={rating}
                readonly
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
            /></p>
            <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</button>
            <p className="social-link"></p>
        </div>
    );
};

export default Chef;