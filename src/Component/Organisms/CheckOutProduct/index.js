import React from 'react';
import Heading from '../../Atoms/Heading';
import { useState, useEffect, useMemo} from 'react';
import './style.css'
import axios from 'axios';
import OrderTotal from '../../Molecules/OrderTotal';
import { useCart } from 'react-use-cart';



function CheckOutProduct(props) {


    const {isEmpty, items, totalItems, cartTotal, updateItemQuantity, removeItem} = useCart()

    const [total, setTotal] = useState(localStorage.getItem('price'))
    const [hidden, setHidden] = useState(0)


    const [flowers, setFlower] = useState([])
    const idlocal = localStorage.getItem('id')
    const getFlowers = async()=>
    {
        const flowers = await axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower?id=${idlocal}`)
        setFlower(flowers.data)
        setTotal(localStorage.getItem('price'))
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
    
    const renderFlower = () => {
        if(isEmpty) return <div className='no-product'><img src='assets/images/empty_product.png'/></div>
        return items.map((flower, index) => (
            <div key={index} className='checkout-img'>
            <img src={flower.imageURL}/>
            <div className='count'>
                <p className='checkout-name'>{flower.name}</p>
                <div className='plus'>
                    <button onClick={()=>{updateItemQuantity(flower.id, flower.quantity ===1 ? flower.quantity : flower.quantity - 1)}} className='sub-add'><i class="fas fa-minus"></i></button>
                    <span className='count'>{flower.quantity}</span>
                    <button onClick={()=>{updateItemQuantity(flower.id, flower.quantity + 1)}} className='sub-add'><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <div className='delete'>
                <div className='price'>{flower.price} $</div>
                <button onClick={()=>removeItem(flower.id)} className='delete-icon'>
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
                    <span className='length'> ({items.length})</span>
                </div>
                <button className='btn-delete' onClick={handleHiddenIcon}>Edit</button>
            </div>

            
           {renderFlower()}


            <div className='total-group'>
                <OrderTotal text='Shipping' price='FREE'/>
                <OrderTotal text='Order total' price={cartTotal}/>
            </div>
            
        </div>
    );
}

export default CheckOutProduct;