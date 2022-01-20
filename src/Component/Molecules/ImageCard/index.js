import React from 'react';
import './style.css'

function ImageCard(props) {
    return (
        <div className='image-card'>
            <img src={props.linkimg}/> 
            <div className='card-text'>
                <div className='flower-name'>{props.name}</div>           
                <div className='flower-price'>{props.price}</div> 
                <span><i class="fas fa-dollar-sign"></i></span>          
            </div>
        </div>
    );
}

export default ImageCard;