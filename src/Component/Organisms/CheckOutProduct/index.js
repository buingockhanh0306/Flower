import React from 'react';
import Heading from '../../Atoms/Heading';
import { useState, useEffect, useMemo} from 'react';
import './style.css'
import axios from 'axios';
import OrderTotal from '../../Molecules/OrderTotal';
import { useDispatch, useSelector } from 'react-redux';
import { adjustQty, RemoveFromCart } from '../../../redux/cart/cartAction';
import flowerAPI from '../../../api/flowerAPI';

function CheckOutProduct(props) {


    const dispatch = useDispatch()
    const [total, setTotal] = useState(localStorage.getItem('price'))
    const [hidden, setHidden] = useState(0)
    const todoCart = JSON.parse(localStorage.getItem('todoCart'))
    const cartSelector = useSelector((state) => state.cart.cart)

    localStorage.setItem('todoCart',JSON.stringify(cartSelector))

    const [flowers, setFlower] = useState([])
    const idlocal = localStorage.getItem('id')
    const getFlowers = async()=>
    {
        const flowers = await flowerAPI.getByID(idlocal)
        setFlower(flowers.data)
        setTotal(localStorage.getItem('price'))
    }

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
        if(todoCart.length === 0) return <div className='no-product'><img src='assets/images/empty_product.png'/></div>
        return todoCart.map((flower) => (
            <div key={flower.id} className='checkout-img'>
            <img src={flower.imageURL}/>
            <div className='count'>
                <p className='checkout-name'>{flower.name}</p>
                <div className='plus'>
                    <button onClick={()=>UpdateQuality(flower.id, flower.qty>1 ? flower.qty-1: 1)} className='sub-add'><i class="fas fa-minus"></i></button>
                    <span className='count'>{flower.qty}</span>
                    <button onClick={()=>UpdateQuality(flower.id, flower.qty+1)} className='sub-add'><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <div className='delete'>
                <div className='price'>{flower.price} $</div>
                <button onClick={()=>handleRemoveProduct(flower.id)}  className='delete-icon'>
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
        ))
        
    }
    useEffect(() => {getFlowers()}, [])

    return (
        <div className='checkout-checkout'>
            <div className='checkout-heading'>
                <div>
                    <Heading text='Order Total'/>
                    <span className='length'>({todoCart.length})</span>
                </div>
                <button  onClick={handleHiddenIcon} className='btn-delete'>Edit</button>
            </div>

            
           {renderFlower()}


            <div className='total-group'>
                <OrderTotal text='Shipping' price='FREE'/>
                <OrderTotal text='Order total' price={showTotal(todoCart)}/>
            </div>
            
        </div>
    );
}

export default CheckOutProduct;