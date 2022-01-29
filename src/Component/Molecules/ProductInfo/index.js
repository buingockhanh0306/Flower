import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react/cjs/react.development';
import CountGroup from '../../Atoms/CountGroup';
import PlusItem from '../../Atoms/PlusItem';
import Price from '../../Atoms/Price';
import axios from 'axios';
import './style.css'
import Heading from '../../Atoms/Heading';
import ButtonColor from '../ButtonColor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function ProductInfo(props) {
    const [flowers, setFlower] = useState([])
    const dispatch = useDispatch()
    const notify = () => toast("Đã thêm vào giỏ hàng");
    const idlocal = localStorage.getItem('id')

    const getFlowers = async () => {
        const flowers = await axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower?id=${idlocal}`)
        setFlower(flowers.data)
    }

    useEffect(() => { getFlowers() }, [])

    const navigate = useNavigate();

    // REDUX
    const handleAddProduct = () => {
        flowers.map(flower => {
           dispatch(addProduct({
               id: uuidv4(),
               name: flower.name,
               imageURL: flower.imageURL,
               price: flower.price
           }))
            notify();
        })
    }

    const changeURL = () => {
        navigate(`/checkout`)

    }
    const renderFlower = () => {
        return flowers.map((flower) => (
            <div>
                <Heading text={flower.name} />
                <Price priceNew={flower.price} />
                <div className='line'></div>
                {/* <CountGroup /> */}
                <div>Color: </div>
                <ButtonColor />
                <div className='order'>
                    <button onClick={handleAddProduct}  className='order-btn'>
                        Order now
                    </button>
                    <button onClick={changeURL} className='order-cart'><i class="fas fa-shopping-cart"></i></button>
                </div>
                <div className='group-plus'>
                    <PlusItem text='Bouquest contens' />
                    <PlusItem text='Details' />
                    <PlusItem text='Delivery & Pay policy' />
                </div>

            <ToastContainer autoClose={2000}/>
                
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