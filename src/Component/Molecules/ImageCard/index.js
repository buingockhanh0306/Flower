import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from "react-router-dom";
import './style.css';


function ImageCard(props) {
    const navigate = useNavigate();

    const changeURL =()=>
    {
        navigate(`/product`)
        localStorage.setItem('id', props.id)     
        localStorage.setItem('price', props.price)     
    }

    return (
        <div className='image-card'>
            <img src={props.linkimg}/>
            <div className='card-text'>
                <button onClick={changeURL} className='flower-name'>{props.name}</button>           
                <div className='flower-price'>{props.price}</div> 
                <span><i class="fas fa-dollar-sign"></i></span>          
            </div>
            <div className='image-card_icon'>
                <button className='image-card_icon-item'><i class="far fa-heart"></i></button>
                <button onClick={changeURL} className='image-card_icon-item'><i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
    );
}

export default ImageCard;