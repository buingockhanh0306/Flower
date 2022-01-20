import React from 'react';
import HeaderChild from '../../Organisms/HeaderChild';
import Title from '../../Atoms/Title';
import StepCheckOut from '../../Organisms/StepCheckOut';
import CheckOutMethod from '../../Organisms/CheckOutMethod';
import CheckOutAddress from '../../Organisms/CheckOutAddress';
import DateTime from '../../Organisms/DateTime';
import CheckOutProduct from '../../Organisms/CheckOutProduct';
import './style.css'
import ButtonArrL from '../../Atoms/ButtonArrL';
import ButtonArrR from '../../Atoms/ButtonArrR';

function CheckOut(props) {
    return (
        <div className="grid">
            <div className='container-md'>
                <HeaderChild text='Cart'/>
                <Title title='Check out'/>
                <div className='row'>
                    <div className='col-md-6'>
                        <StepCheckOut/>
                        <CheckOutMethod/>
                        <CheckOutAddress/>
                        <DateTime/>
                        <div className='btn-line'></div>
                        <div className='btnarr'>
                            <ButtonArrL text='Back step'/>
                            <ButtonArrR text='Payment'/>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <CheckOutProduct/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;