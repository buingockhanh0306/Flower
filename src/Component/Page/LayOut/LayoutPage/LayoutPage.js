import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderChild from '../../../Organisms/HeaderChild';
import Title from '../../../Atoms/Title';
import SelectAndCount from '../../../Organisms/SelectAndCount';

function LayoutPage(props) {
    const category = localStorage.getItem('category')
    return (
        <div className="grid">
            <div className='container-md'>
                <HeaderChild text={category}/>
                <Title title='All Plants'/>
                <SelectAndCount/>
                <div className='line'></div>
                <Outlet/>
            </div>
        </div>
    );
}

export default LayoutPage;