import React from 'react';
import { useState } from 'react/cjs/react.development';
import './style.css'

function CountGroup(props) {

    const [count, setCount] = useState(0);

    const Plus = () =>{
        setCount(count+1)
    }
    const Sub = () =>{
        count===0 ? setCount(0):setCount(count-1)
    }

    return (
        <div className='count-group'>
            <div>Count: </div>
            <div className='plus'>
                <button onClick={Sub} className='sub-add'><i className="fas fa-minus"></i></button>
                <span className='count'>{count}</span>
                <button onClick={Plus} className='sub-add'><i className="fas fa-plus"></i></button>
            </div>
        </div>
    );
}

export default CountGroup;