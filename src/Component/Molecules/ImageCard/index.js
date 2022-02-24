import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from "react-router-dom";
import './style.css';


function ImageCard(props) {
    const navigate = useNavigate();

    const changeURL =(id)=>
    {
        navigate(`/product/${id}`)
    }

    return (
        <div className='image-card'>
            <div className='image-card_img'>
                <img src={props.linkimg}/>
                <div className='image-card_icon'>
                    <button className='image-card_icon-item'><i className="far fa-heart"></i></button>
                    <button onClick={()=>changeURL(props.id)} className='image-card_icon-item'><i className="fas fa-shopping-cart"></i></button>
                </div>
            </div>
            <div className='card-text'>
                <button onClick={()=>changeURL(props.id)} className='flower-name'>{props.name}</button>           
                <div className='flower-price'>{props.price}</div> 
                <span><i className="fas fa-dollar-sign"></i></span>          
            </div>
        </div>
    );
}

export default ImageCard;