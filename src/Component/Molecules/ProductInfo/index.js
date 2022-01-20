import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import CountGroup from '../../Atoms/CountGroup';
import PlusItem from '../../Atoms/PlusItem';
import Price from '../../Atoms/Price';
import axios from 'axios';
import './style.css'
import Heading from '../../Atoms/Heading';

function ProductInfo(props) {
    const [index, setIndex] = useState(1)
    const [flowers, setFlower] = useState([])
    
    const getFlowers = async()=>
    {
        const flowers = await axios.get('https://61e52378595afe00176e534e.mockapi.io/flower/flower')
        setFlower(flowers.data)
        console.log(flowers.data[0].name)
    }
    const renderFlower =()=>
    {
        if(flowers === undefined) {return}
        else {
            return <Heading text={flowers.data}/>
        }
    }
    
    useEffect(() => {getFlowers()}, [])
    return (
        <div className='infor'>
            {renderFlower()}
            <Price/>
            <div className='line'></div>
            <CountGroup/>
            <div>Color: </div>
            <div className='order'>
                <button className='order-btn'>Order now</button>
                <button className='order-cart'><i class="fas fa-shopping-cart"></i></button>
            </div>
            <div className='group-plus'>
                <PlusItem text='Bouquest contens'/>
                <PlusItem text='Details'/>
                <PlusItem text='Delivery & Pay policy'/>
            </div>
        </div>
    );
}

export default ProductInfo;