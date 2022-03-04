import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState } from 'react/cjs/react.development';
import PlusItem from '../../Atoms/PlusItem';
import Price from '../../Atoms/Price';
import './style.css'
import Heading from '../../Atoms/Heading';
import ButtonColor from '../ButtonColor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartAction';
import { db } from "../../../firebase-config.js"
import { collection, getDocs } from "firebase/firestore"

function ProductInfo(props) {
    const [flowers, setFlower] = useState([])
    const productColectionRef = collection(db, "products")

    const dispatch = useDispatch()
    const notify = () => toast("Đã thêm vào giỏ hàng");

    const {id} = useParams();

    useEffect(() => {
        const getFlowers = async () => {
            const data = await getDocs(productColectionRef);
            setFlower(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(doc=>doc.id===id));
        };
        getFlowers();
    }, []);

    const navigate = useNavigate();

    // REDUX
    const handleAddProduct = (flower) => {
        dispatch(addToCart(flower))
        notify();
    }

    const changeURL = (id) => {
        navigate(`/checkout`)
    }
    const renderFlower = () => {
        return (
            flowers.map(flower =>
            (
                <div key={flower.id}>
                    <Heading categoryName={flower.name} text={flower.name} />
                    <Price priceNew={flower.price} />
                    <div className='line'></div>
                    {/* <CountGroup /> */}
                    <div>Color: </div>
                    <ButtonColor />
                    <div className='order'>
                        <button onClick={() => handleAddProduct(flower)} className='order-btn'>
                            Order now
                        </button>
                        <button onClick={() => changeURL(flower.id)} className='order-cart'><i className="fas fa-shopping-cart"></i></button>
                    </div>
                    <div className='group-plus'>
                        <PlusItem text='Bouquest contens' />
                        <PlusItem text='Details' />
                        <PlusItem text='Delivery & Pay policy' />
                    </div>

                    <ToastContainer autoClose={2000} />

                </div>

            ))
        )

    }
    return (
        <div className='infor'>
            {renderFlower()}
        </div>
    )
}


export default ProductInfo;