import React from 'react';
import NumStep from '../../Atoms/NumStep';
import './style.css'

function StepCheckOut(props) {
    return (
        <div className='step'>
            <NumStep bgr={{backgroundColor: "black", color: "#fff"}} number='1'/>
            <div className='step-name'>Contacts</div>
            <div className='line-step line-step_bold'></div>
            <NumStep number='2'/>
            <div className='step-name'>Shipping</div>
            <div className='line-step'></div>
            <NumStep number='3'/>
            <div className='step-name'>Payment</div>
        </div>
    );
}

export default StepCheckOut;