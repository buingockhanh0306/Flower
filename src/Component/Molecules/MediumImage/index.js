import React from 'react';
import './style.css'
import MediumImageContent from '../../Atoms/MediumImageContent';

function MediumImage(props) {
    return (
        <div className='medium-img row'>
            <div className='col md-6 medium'>
                <img src='assets/images/left.png'/>
                <MediumImageContent toLink='/gifts' title='Nice little gifts' desc='for loved one'/>
            </div>
            <div className='col md-6 medium'>
                <img src='assets/images/right.png'/>
                <MediumImageContent toLink='/plants' title='Plants' desc='for home comfort'/>
            </div>
            
        </div>
    );
}

export default MediumImage;