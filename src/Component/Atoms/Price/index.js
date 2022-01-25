import React from 'react';
import './style.css'

function Price(props) {
    return (
        <div className='product-price'>
            <span className='price-new'>{props.priceNew}<i class="fas fa-dollar-sign"></i></span>
            <del className='price-old'>60 <i class="fas fa-dollar-sign"></i></del>
        </div>
    );
}

export default Price;