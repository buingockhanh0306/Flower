import React from 'react';
import './style.css'

function OrderTotal(props) {
    return (
        <div className='order-total'>
            <div className='order-line'></div>
            <div className='total'>
                <p className='total-text'>{props.text}</p>
                <p className='total-price'>{props.price === 'FREE' ? 'FREE' : props.price+'$'}</p>
            </div>
        </div>
    );
}

export default OrderTotal;