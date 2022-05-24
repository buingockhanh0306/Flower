import React from 'react';
import './style.css'
import { BrowserRouter as Router, Switch, Route, Link, useNavigate, useLocation } from "react-router-dom";

function ButtonArrL(props) {
    const navigate = useNavigate();

     
    const location = useLocation()
    const query = new URLSearchParams(location.search)

    const changeURL =()=>
    {
        navigate(`/product?id=${query.get("id")}`)
    }
    return (
        <div> 
            <button onClick={changeURL} className='btnL'>
                <i className="fas fa-long-arrow-alt-left"></i>
                <p className='btnL-text'>{props.text}</p>
            </button>
        </div>
    );
}

export default ButtonArrL;