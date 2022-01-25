import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react/cjs/react.development';
import CountGroup from '../../Atoms/CountGroup';
import PlusItem from '../../Atoms/PlusItem';
import Price from '../../Atoms/Price';
import axios from 'axios';
import './style.css'
import Heading from '../../Atoms/Heading';
import { render } from '@testing-library/react';
import ButtonColor from '../ButtonColor';

function ProductInfo(props) {
    const [flowers, setFlower] = useState([])

    const idlocal = localStorage.getItem('id')
   
    const getFlowers = async () => {
        const flowers = await axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower?id=${idlocal}`)
        console.log(flowers.data)
        setFlower(flowers.data)
    }

    useEffect(() => { getFlowers() }, [])

    const navigate = useNavigate();
    const changeURL = () => {
        navigate(`/checkout`)
    }
    const renderFlower = () => {
        return flowers.map((flower) => (
            <div>
                <Heading text={flower.name} />
                <Price priceNew={flower.price} />
                <div className='line'></div>
                <CountGroup/>
                <div>Color: </div>
                <ButtonColor/>
                <div className='order'>
                    <button id={flower.id} onClick={changeURL} className='order-btn'>Order now</button>
                    <button className='order-cart'><i class="fas fa-shopping-cart"></i></button>
                </div>
                <div className='group-plus'>
                    <PlusItem text='Bouquest contens' />
                    <PlusItem text='Details' />
                    <PlusItem text='Delivery & Pay policy' />
                </div>
            </div>
        ))

    }



    return (
        <div className='infor'>
            {renderFlower()}
        </div>
    );
}

export default ProductInfo;