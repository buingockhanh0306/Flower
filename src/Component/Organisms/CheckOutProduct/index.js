import React from 'react';
import Heading from '../../Atoms/Heading';
import { useState, useEffect, useMemo} from 'react';
import './style.css'
import axios from 'axios';
import OrderTotal from '../../Molecules/OrderTotal';



function CheckOutProduct(props) {
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(localStorage.getItem('price'))

    const Plus = () =>{
        setCount(count+1)
    }
    const Sub = () =>{
        count===1 ? setCount(1):setCount(count-1)
    }

    const [flowers, setFlower] = useState([])
    const idlocal = localStorage.getItem('id')
    const getFlowers = async()=>
    {
        const flowers = await axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower?id=${idlocal}`)
        setFlower(flowers.data)
        setTotal(localStorage.getItem('price'))
    }

    const Total= useMemo(() =>
    {
        return total*count;
    },[count])


    const renderFlower = () => {
        return flowers.map((flower) => (
            <div className='checkout-img'>
            <img src={flower.imageURL}/>
            <div className='count'>
                <p className='checkout-name'>{flower.name}</p>
                <div className='plus'>
                    <button onClick={Sub} className='sub-add'><i class="fas fa-minus"></i></button>
                    <span className='count'>{count}</span>
                    <button onClick={Plus} className='sub-add'><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <div className='price'>{flower.price} $</div>
        </div>
        ))
        
    }
    useEffect(() => {getFlowers()}, [])

    return (
        <div className='checkout-checkout'>
            <div className='checkout-heading'>
                <Heading text='Order Total (1)'/>
                <Heading text='Edit'/>
            </div>

            
           {renderFlower()}


            <div className='total-group'>
                <OrderTotal text='Shipping' price='FREE'/>
                <OrderTotal text='Order total' price={Total}/>
            </div>
            
        </div>
    );
}

export default CheckOutProduct;