import React, {useEffect, useState} from 'react';
import ImageCard from '../../Molecules/ImageCard';
import axios from 'axios';
import './style.css'
import flowerAPI from '../../../api/flowerAPI';
import ClipLoader from "react-spinners/ClipLoader";

function Gallery1(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(true)

    const [x, setX] = useState(0);

    
    const getFlowers = async()=>
    {
        const flowers = await flowerAPI.getAll()
        setFlower(flowers.data)
        setLoading(false)
    }
    const renderFlower = () => {
        return loading ? <div className='loading'><ClipLoader color='#D78536' loading={loading} size={30} /></div> : 
        flowers.map(flower => (
            <div key={flower.id} className='col-md-3 col-6' >
                <ImageCard id={flower.id} linkimg={flower.imageURL} name={flower.name} price={flower.price} />
            </div>
        ))
        
    }
    
    const toLeft = ()=>
    {
        x===0 ? setX(0) : setX(x+25)
    }
    const toRight = ()=>
    {
        x===-25 * (flowers.length-4) ? setX(x) : setX(x-25)
    }
    useEffect(() => {getFlowers()}, [])
    return (
        <div className='gallery'>
            <div className='gallery-heading'>
                <div className='gallery-name'>{props.galleryname}</div>
                <div className='gallery-arrow'>
                    <button className='arrow-btn' onClick={toLeft}>
                         <i class="arrow1 fas fa-long-arrow-alt-left"></i>
                    </button>
                    <button className='arrow-btn' onClick={toRight}>
                         <i class="arrow2 fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
            <div className='row slide-img' style={{transform: `translateX(${x}%)`}}>
                 {renderFlower()}
            </div>
            
        </div>

    );
}

export default Gallery1;