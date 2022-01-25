import React from 'react';
import ProductImage from '../../Atoms/ProductImage';
import ProductInfo from '../../Molecules/ProductInfo';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './style.css'


function ContentCard(props) {
    const [flowers, setFlower] = useState([])
    
    const idlocal =  localStorage.getItem('id')
    const getFlowers = async()=>
    {
        const flowers = await axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower?id=${idlocal}`)
        setFlower(flowers.data)
    }
    const renderFlower = () => {
        return flowers.map((flower) => (
           
            <ProductImage imgURL={flower.imageURL}/>
        ))
        
    }
    useEffect(() => {getFlowers()}, [])
    return (
        <div className='row margin'>
            <div className='col-6'>
                {renderFlower()}
            </div>
            <div className='col-6'>
                <ProductInfo/>
            </div>

        </div>
    );
}

export default ContentCard;