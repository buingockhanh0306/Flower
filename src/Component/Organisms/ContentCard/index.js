import React from 'react';
import ProductImage from '../../Atoms/ProductImage';
import ProductInfo from '../../Molecules/ProductInfo';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './style.css'
import flowerAPI from '../../../api/flowerAPI';
import { ClipLoader } from 'react-spinners';


function ContentCard(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(true)
    
    const idlocal =  localStorage.getItem('id')
    const getFlowers = async()=>
    {
        const flowers = await flowerAPI.getByID(idlocal)
        setFlower(flowers.data)
        setLoading(false)
    }
    const renderFlower = () => {
        return (
            <ProductImage imgURL={flowers.imageURL}/>
        )
        
    }
    useEffect(() => {getFlowers()}, [])
    return (
        loading ? <div className='loading'><ClipLoader color='#D78536' loading={loading} size={30} /></div> 
        : <div className='row margin'>
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