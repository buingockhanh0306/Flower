import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate, useLocation } from "react-router-dom";
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
import flowerAPI from '../../../api/flowerAPI';
import ClipLoader from "react-spinners/ClipLoader";

function ProductInfo(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading]= useState(true)
    const dispatch = useDispatch()
    const notify = () => toast("Đã thêm vào giỏ hàng");
    const idlocal = localStorage.getItem('id')

    const getFlowers = async () => {
        const flowers = await flowerAPI.getByID(idlocal)
        setFlower(flowers.data)
        setLoading(false)        
    }
    useEffect(() => { getFlowers() }, [])

    const navigate = useNavigate();

    // REDUX
    const handleAddProduct = (id) => {
           dispatch(addToCart(id))
            notify();
        }
    

    const changeURL = (id) => {
        localStorage.setItem('idProd', id)
        navigate(`/checkout`)

    }
    const renderFlower = () => {
        return  (
            <div>
                <Heading categoryName={flowers.name} text={flowers.name} />
                <Price priceNew={flowers.price} />
                <div className='line'></div>
                {/* <CountGroup /> */}
                <div>Color: </div>
                <ButtonColor />
                <div className='order'>
                    <button onClick={()=>handleAddProduct(flowers.id)} className='order-btn'>
                        Order now
                    </button>
                    <button onClick={()=>changeURL(flowers.id)} className='order-cart'><i class="fas fa-shopping-cart"></i></button>
                </div>
                <div className='group-plus'>
                    <PlusItem text='Bouquest contens' />
                    <PlusItem text='Details' />
                    <PlusItem text='Delivery & Pay policy' />
                </div>

            <ToastContainer autoClose={2000}/>
                
            </div>
        )

    }
    return (
        loading ? <div className='loading'><ClipLoader color='#D78536' loading={loading} size={30} /></div> : <div className='infor'>
            {renderFlower()}
        </div>
    )
}
    

export default ProductInfo;