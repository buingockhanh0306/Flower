import React from 'react';
import './style.css'

function MediumImage(props) {
    return (
        <div className='medium-img row'>
            <div className='col md-6'>
                <img src='assets/images/flower.jpg'/>
            </div>
            <div className='col md-6'>
                <img src='assets/images/flower.jpg'/>
            </div>
            
        </div>
    );
}

export default MediumImage;