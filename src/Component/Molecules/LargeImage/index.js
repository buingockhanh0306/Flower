import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function LargeImage(props) {
    return (
        <div className='large-image'>
            <img className='large-img' src='assets/images/banner.jpg'/>
            <div className='large-image_content'>
                <span className='content-title'>40% OFF</span>
                <span className='content-desc'>Best deals this week. Fresh flower, plants and gifts</span>
                <Link to='/flowers' className='content-btn'>
                    Shop now
                    <i className="arr fas fa-long-arrow-alt-right"></i>
                </Link>
            </div>
        </div>
    );
}

export default LargeImage;