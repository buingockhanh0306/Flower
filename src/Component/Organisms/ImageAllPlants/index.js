import React, {useEffect, useState} from 'react';
import ImageCard from '../../Molecules/ImageCard';
import axios from 'axios';
import './style.css'

function ImageAllPlans(props) {
    const [flowers, setFlower] = useState([])

    
    const getFlowers = async()=>
    {
        const flowers = await axios.get('https://61e52378595afe00176e534e.mockapi.io/flower/flower')
        console.log(flowers.data)
        setFlower(flowers.data)
    }
    const renderFlower = () => {
        return flowers.map(flower => (
            <div className='col-md-3 col-6' >
                <ImageCard linkimg={flower.imageURL} name={flower.name} price={flower.price} />
            </div>
        ))
        
    }
    useEffect(() => {getFlowers()}, [])
    return (
        <div className='gallery'>
            <div className='gallery-heading'>
                <div className='gallery-name'>{props.galleryname}</div>
            </div>
            <div className='row thu'>
                 {renderFlower()}
            </div>
            
        </div>

    );
}

export default ImageAllPlans;