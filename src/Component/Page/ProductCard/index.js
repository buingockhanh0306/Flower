import React from 'react';
import ContentCard from '../../Organisms/ContentCard';
import HeaderCard from '../../Organisms/HeaderCard';

function ProductCard(props) {
    return (
        <div className="grid">
            <div className='container-md over'>
            <HeaderCard text="Blue Tulips"/>
            <ContentCard/>
            </div>
        </div>
    );
}

export default ProductCard;