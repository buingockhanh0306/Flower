import React from 'react';
import ButtonBlack from '../../Atoms/ButtonBlack';
import Title from '../../Atoms/Title';
import HeaderChild from '../../Organisms/HeaderChild';
import ImageAllPlans from '../../Organisms/ImageAllPlants';
import SelectAndCount from '../../Organisms/SelectAndCount';
import './style.css'

function AllPlants(props) {
    return (
        <div className="grid">
            <div className='container-md'>
                <HeaderChild text='Plants'/>
                <Title title='All Plants'/>
                <SelectAndCount/>
                <div className='line'></div>
                <ImageAllPlans/>
            </div>
        </div>
    );
}

export default AllPlants;