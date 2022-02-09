import React, { useState } from 'react';
import Dropdown from '../../Atoms/Dropdown';
import SelectItem from '../../Atoms/SelectItem';
import './style.css'
import {useEffect } from 'react';
import flowerAPI from '../../../api/flowerAPI';



function GroupSelect(props) {

    const [flowers, setFlower] = useState([])

    const getFlowers = async () => {
        const flowers = await flowerAPI.getAll()
        setFlower(flowers.data)
    }
    
    useEffect(() => { getFlowers() }, [])

    const renderColor = ()=>
    {
        // flowers.map(flower =>
        //     {
        //         console.log(flower)
        //         return(
        //             <Dropdown item={flower.color}/>
        //         )
        //     }
        // )
    }
    return (
        <div className='group-select'>
            <div className='drop-list'>
                <SelectItem text='Group by'/>
                <div className='drop-down'>
                    <Dropdown item="khanh"/>
                </div>
            </div>
            <div className='drop-list'>
                <SelectItem text='Color'/>
                <div className='drop-down'>
                    {renderColor()}
                </div>
            </div>
            <div className='drop-list'>
                <SelectItem text='Price'/>  
                <div className='drop-down'>
                    <Dropdown/>
                </div>
            </div>
            <div className='drop-list'>
                <SelectItem text='Flower type'/>    
                <div className='drop-down'>
                    <Dropdown/>
                </div>
            </div>
            <div className='drop-list'>
                <SelectItem text='Occasion'/>
                <div className='drop-down'>
                    <Dropdown/>
                </div>
            </div>
        </div>
    );
}

export default GroupSelect;