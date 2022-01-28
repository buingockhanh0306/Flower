import React from 'react';
import './style.css'

function LargeImage(props) {
    return (
        <div className='large-image'>
            <img className='large-img' src='assets/images/banner.jpg'/>
            <div className='large-image_content'>
                <span className='content-title'>40% OFF</span>
                <span className='content-desc'>Best deals this week. Fresh flower, plants and gifts</span>
                <button className='content-btn'>
                    Shop now
                    <i class="arr fas fa-long-arrow-alt-right"></i>
                </button>
            </div>
        </div>
    );
}

export default LargeImage;