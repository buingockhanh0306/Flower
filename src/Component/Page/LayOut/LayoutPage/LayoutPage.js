import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import HeaderChild from '../../../Organisms/HeaderChild';
import Title from '../../../Atoms/Title';



function LayoutPage(props) {
    const {category} = useParams()
    return (
        <div className="grid">
            <div className='container-md'>
                <HeaderChild text={category}/>
                <Title text={category}/>
                <Outlet/>
            </div>
        </div>
    );
}

export default LayoutPage;