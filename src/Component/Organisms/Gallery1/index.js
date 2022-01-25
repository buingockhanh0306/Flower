import React, {useEffect, useState} from 'react';
import ImageCard from '../../Molecules/ImageCard';
import axios from 'axios';
import './style.css'

function Gallery1(props) {
    const [flowers, setFlower] = useState([])
    const [x, setX] = useState(0);

    
    const getFlowers = async()=>
    {
        const flowers = await axios.get('https://61e52378595afe00176e534e.mockapi.io/flower/flower')
        console.log(flowers.data)
        setFlower(flowers.data)
    }
    const renderFlower = () => {
        return flowers.map(flower => (
            <div className='col-md-3 col-6' >
                <ImageCard id={flower.id} linkimg={flower.imageURL} name={flower.name} price={flower.price} />
            </div>
        ))
        
    }
    
    const toLeft = ()=>
    {
        x===0 ? setX(0) : setX(x+24)
    }
    const toRight = ()=>
    {
        x===-24 * (flowers.length-4) ? setX(x) : setX(x-24)
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
                         <i class="fas fa-long-arrow-alt-right"></i>
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