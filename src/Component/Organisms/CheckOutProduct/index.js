import React from 'react';
import Heading from '../../Atoms/Heading';
import { useState } from 'react';
import './style.css'
import OrderTotal from '../../Molecules/OrderTotal';

function CheckOutProduct(props) {
    const [count, setCount] = useState(1);

    const Plus = () =>{
        setCount(count+1)
    }
    const Sub = () =>{
        count===1 ? setCount(1):setCount(count-1)
    }
    return (
        <div className='checkout-product'>
            <div className='product-heading'>
                <Heading text='Order Total (1)'/>
                <Heading text='Edit'/>
            </div>

            
            <div className='product-img'>
                <img src='assets/images/flower.jpg'/>
                <div className='count'>
                    <p className='product-name'>Ten gi do</p>
                    <div className='plus'>
                        <button onClick={Sub} className='sub-add'><i class="fas fa-minus"></i></button>
                        <span className='count'>{count}</span>
                        <button onClick={Plus} className='sub-add'><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <div className='price'>67 đô</div>
            </div>


            <div className='total-group'>
                <OrderTotal text='Shipping' price='FREE'/>
                <OrderTotal text='Order total' price='FREE'/>
            </div>
            
        </div>
    );
}

export default CheckOutProduct;