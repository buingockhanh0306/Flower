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

    // Lọc giá trị trùng nhau 
    const unique = (arr)=>
    {
        return Array.from(new Set(arr))
    }

    const renderColor = () => {
        let arrColor = []
        flowers.map((flower)=>
            {
                arrColor.push(flower.color)
            })
        const newArr = unique(arrColor)
        return newArr.map(color => (
            <Dropdown key={color} item={color}/>           
        ))
        
    }
    return (
        <>
        <div className='group-select'>
            <div className='drop-list'>
                <SelectItem text='Group by'/>
                <div className='drop-down'>
                    <Dropdown item="Latest"/>
                    <Dropdown item="Oldest"/>
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
                    <Dropdown item="From cheap to expensive"/>
                    <Dropdown item="From expensive to cheap"/>
                </div>
            </div>

            <div className='drop-list'>
                <SelectItem text='Flower type'/>    
                <div className='drop-down'>
                    <Dropdown item='Tulip'/>
                    <Dropdown item='Rose'/>
                    <Dropdown item='Daisy'/>
                </div>
            </div>

            <div className='drop-list'>
                <SelectItem text='Occasion'/>
                <div className='drop-down'>
                    <Dropdown/>
                </div>
            </div>
        </div>
        <div className='count'>{flowers.length} items</div>
        </>
    );
}

export default GroupSelect;