import React, { useState } from 'react';
import './style.css'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function GroupSelect(props) {

    const [flowers, setFlower] = useState([])
    const navigate = useNavigate();
    const { category } = useParams()
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
        navigate(`/${category}/${value}`)
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


            </div>
            <div className='count'>{flowers.length} items</div>
        </>
    );
}

export default GroupSelect;