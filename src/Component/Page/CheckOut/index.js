import React from 'react';
import HeaderChild from '../../Organisms/HeaderChild';
import Title from '../../Atoms/Title';

function CheckOut(props) {
    return (
        <div className="grid">
            <div className='container-md'>
                <HeaderChild text='Cart'/>
                <Title title='Check out'/>
                
            </div>
        </div>
    );
}

export default CheckOut;