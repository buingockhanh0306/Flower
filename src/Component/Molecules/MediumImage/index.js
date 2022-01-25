import React from 'react';
import './style.css'

function MediumImage(props) {
    return (
        <div className='medium-img row'>
            <div className='col md-6 medium'>
                <img src='assets/images/left.jpg'/>
            </div>
            <div className='col md-6 medium'>
                <img src='assets/images/right.jpg'/>
            </div>
            
        </div>
    );
}

export default MediumImage;