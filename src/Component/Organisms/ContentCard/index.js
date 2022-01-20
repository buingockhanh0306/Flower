import React from 'react';
import ProductImage from '../../Atoms/ProductImage';
import ProductInfo from '../../Molecules/ProductInfo';
import './style.css'


function ContentCard(props) {
    return (
        <div className='row margin'>
            <div className='col-6'>
                <ProductImage imgURL='assets/images/flower.jpg'/>
            </div>
            <div className='col-6'>
                <ProductInfo/>
            </div>

        </div>
    );
}

export default ContentCard;