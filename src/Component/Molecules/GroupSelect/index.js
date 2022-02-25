import React, { useState } from 'react';
import Dropdown from '../../Atoms/Dropdown';
import SelectItem from '../../Atoms/SelectItem';
import './style.css'
import { useEffect } from 'react';
// import flowerAPI from '../../../api/flowerAPI';
import { useNavigate } from 'react-router-dom';



function GroupSelect(props) {

    const [flowers, setFlower] = useState([])
    const navigate = useNavigate();
    const category = localStorage.getItem('category')
    // const getFlowers = async () => {
    //     const flowers = await flowerAPI.getAll()
    //     setFlower(flowers.data)
    // }

    // useEffect(() => { getFlowers() }, [])

    // Lọc giá trị trùng nhau 
    const unique = (arr) => {
        return Array.from(new Set(arr))
    }

    const renderColor = () => {
        let arrColor = []
        flowers.map((flower) => {
            arrColor.push(flower.color)
        })
        const newArr = unique(arrColor)
        return newArr.map(color => (
            <option key={color} value={color}>{color}</option>
        ))
    }
    const filterGroup =(value)=>
    {
        navigate(`/${category}`)
    }
    const filterColor=(value)=>
    {
        navigate(`/${category}`)
    }
    return (
        <>
            <div className='group-select'>
                <div className='drop-list'>
                    <select onChange={e=>filterGroup(e.target.value)} className='select' aria-label="Default select example">
                        <option defaultValue="">Group By</option>
                        <option value="last">Lastest</option>
                        <option value="old">Oldest</option>
                    </select>
                </div>

                <div className='drop-list'>
                    <select onChange={(e)=>filterColor(e.target.value)} className='select' aria-label="Default select example">
                        <option defaultValue="">Color</option>
                        {renderColor()}
                    </select>
                </div>

                <div className='drop-list'>
                    <select className='select' aria-label="Default select example">
                        <option defaultValue=""></option>
                        <option value="1">One</option>
                    </select>
                </div>

                <div className='drop-list'>
                    <select className='select' aria-label="Default select example">
                        <option defaultValue=""></option>
                        <option value="1">One</option>
                    </select>
                </div>

                <div className='drop-list'>
                    <select className='select' aria-label="Default select example">
                        <option defaultValue=""></option>
                        <option value="1">One</option>
                    </select>
                </div>
            </div>
            <div className='count'>{flowers.length} items</div>
        </>
    );
}

export default GroupSelect;