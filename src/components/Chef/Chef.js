import { faComment, faShoppingCart, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Chef.css';

const Chef = props => {
    const { name, country, salary, image, specialItem, rating } = props.chef;
    return (
        <div className="chef">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p><small>Country: {country}</small></p>
            <h4>Signature Dish: {specialItem}</h4>
            <h4>Salary: ${salary}</h4>
            <p>Rating: {rating} <Rating
                initialRating={rating}
                emptySymbol="far fa-star star-icon-color"
                fullSymbol="fas fa-star star-icon-color"
                readonly
            />
            </p>
            <button onClick={() => props.handleAddToCart(props.chef)} className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            <p className="icons">
                <FontAwesomeIcon className="thumbs-up-icon" icon={faThumbsUp} /> <FontAwesomeIcon className="thumbs-down-icon" icon={faThumbsDown} /> <FontAwesomeIcon className="comments-icon" icon={faComment} />
            </p>
        </div>
    );
};

export default Chef;