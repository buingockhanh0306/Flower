import React from 'react';
import ContentCard from '../../Organisms/ContentCard';
import HeaderCard from '../../Organisms/HeaderCard';

function ProductCard(props) {
    const nameFlower = localStorage.getItem('name')
    return (
        <div className="grid">
            <div className='container-md over'>
            <HeaderCard text={nameFlower}/>
            <ContentCard/>
            </div>
        </div>
    );
}

export default ProductCard;