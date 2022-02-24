import React from 'react';
import Heading from '../../Atoms/Heading';
import { useState, useEffect, useMemo} from 'react';
import './style.css'
import axios from 'axios';
import OrderTotal from '../../Molecules/OrderTotal';
import { useDispatch, useSelector } from 'react-redux';
import { adjustQty, RemoveFromCart } from '../../../redux/cart/cartAction';
import {db} from "../../../firebase-config.js"
import {collection, getDocs} from "firebase/firestore"


function CheckOutProduct(props) {


    const dispatch = useDispatch()

    const [total, setTotal] = useState(localStorage.getItem('price'))
    const [hidden, setHidden] = useState(0)
    const cartSelector = useSelector((state) => state.cart.cart)
    useEffect(()=>{console.log({cartSelector});})
    const handleRemoveProduct = (id) => {
             dispatch(RemoveFromCart(id)
        )
    }

    const handleHiddenIcon = ()=>
    {
        const dlt = document.querySelectorAll('.delete-icon')
        for(var i = 0; i<dlt.length; i++)
        {
            hidden===0 ? dlt[i].style.display='block' : (dlt[i].style.display='none')
        }
        hidden === 0 ? setHidden(1) : setHidden(0)
    }

    const UpdateQuality = (itemID, value) =>
    {
        dispatch(adjustQty(itemID, value))
    }
    const showTotal = (cart) =>
    {
        let total = 0;
        if(cart.length>0){
            for(var i=0; i < cart.length; i++)
            {
                total+=cart[i].price*cart[i].qty;
            }
        }
        return total
    }

    const renderFlower = () => {
        if(cartSelector.length === 0) return <div className='no-product'><img src='assets/images/empty_product.png'/></div>
        return cartSelector.map((flower) => (
        <div key={flower.id} className='checkout-img'>
            <img src={flower.imageURL}/>
            <div className='count'>
                <p className='checkout-name'>{flower.name}</p>
                <div className='plus'>
                    <button onClick={()=>UpdateQuality(flower.id, flower.qty>1 ? flower.qty-1: 1)} className='sub-add'><i className="fas fa-minus"></i></button>
                    <span className='count'>{flower.qty}</span>
                    {console.log(flower.qty)}
                    <button onClick={()=>UpdateQuality(flower.id, flower.qty+1)} className='sub-add'><i className="fas fa-plus"></i></button>
                </div>
            </div>
            <div className='delete'>
                <div className='price'>{flower.price} $</div>
                <button onClick={()=>handleRemoveProduct(flower.id)}  className='delete-icon'>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
        ))
        
    }

    return (
        <div className='checkout-checkout'>
            <div className='checkout-heading'>
                <div>
                    <Heading text='Order Total'/>
                    <span className='length'> ({cartSelector.length})</span>
                </div>
                <button  onClick={handleHiddenIcon} className='btn-delete'>Edit</button>
            </div>

            <div className='checkout-over'>
                 {renderFlower()}
            </div>


            <div className='total-group'>
                <OrderTotal text='Shipping' price='FREE'/>
                <OrderTotal text='Order total' price={showTotal(cartSelector)}/>
            </div>
            
        </div>
    );
}

export default CheckOutProduct;