import React from 'react';
import Heading from '../../Atoms/Heading';
import { useState, useEffect, useMemo} from 'react';
import './style.css'
import axios from 'axios';
import OrderTotal from '../../Molecules/OrderTotal';
// import { useDispatch, useSelector } from 'react-redux';
// import { todoCartSelector, todoTotalSelector } from '../../../redux/selector';
// import { INCREMENT, removeProduct } from '../../../redux/actions';

import getData from '../../../data';

function CheckOutProduct(props) {


    // const dispatch = useDispatch()
    const [total, setTotal] = useState(localStorage.getItem('price'))
    const [hidden, setHidden] = useState(0)
    // const todoCart = useSelector(todoCartSelector)
    // const imcre = useSelector(todoTotalSelector)
    // const [quantity, setQuantity] = useState(1)

    const [flowers, setFlower] = useState([])
    const idlocal = localStorage.getItem('id')
    const getFlowers = async()=>
    {
        const flowers = await axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower?id=${idlocal}`)
        setFlower(flowers.data)
        setTotal(localStorage.getItem('price'))
    }

    // const handleRemoveProduct = (ID) => {
    //     todoCart.map(flower => {flower.id === ID &&
    //          dispatch(removeProduct({id: flower.id}))
    //     })
    // }

    const handleHiddenIcon = ()=>
    {
        const dlt = document.querySelectorAll('.delete-icon')
        for(var i = 0; i<dlt.length; i++)
        {
            hidden===0 ? dlt[i].style.display='block' : (dlt[i].style.display='none')
        }
        hidden === 0 ? setHidden(1) : setHidden(0)
    }

    // const Sub = (ID) =>
    // {
    //     todoCart.map(flower=>  dispatch(INCREMENT({id:flower.id})) )
             
    // }
    // const showTotal = (cart) =>
    // {
    //     let total = 0;
    //     if(cart.length>0){
    //         for(var i=0; i < cart.length; i++)
    //         {
    //             total+=cart[i].price*cart[i].qty;
    //         }
    //     }
    //     return total
    // }

    const renderFlower = () => {
        if(flowers.length === 0) return <div className='no-product'><img src='assets/images/empty_product.png'/></div>
        return flowers.map((flower, index) => (
            <div key={index} className='checkout-img'>
            <img src={flower.imageURL}/>
            <div className='count'>
                <p className='checkout-name'>{flower.name}</p>
                <div className='plus'>
                    <button className='sub-add'><i class="fas fa-minus"></i></button>
                    <span className='count'>10</span>
                    <button className='sub-add'><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <div className='delete'>
                <div className='price'>{flower.price} $</div>
                <button className='delete-icon'>
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
                    <span className='length'> 10</span>
                </div>
                <button className='btn-delete'>Edit</button>
            </div>

            
           {renderFlower()}


            <div className='total-group'>
                <OrderTotal text='Shipping' price='FREE'/>
                <OrderTotal text='Order total' price='{showTotal(todoCart)}'/>
            </div>
            
        </div>
    );
}

export default CheckOutProduct;