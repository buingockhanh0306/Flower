import React, {useEffect, useState} from 'react';
import ImageCard from '../../Molecules/ImageCard';
import axios from 'axios';
import ButtonBlack from '../../Atoms/ButtonBlack';
import './style.css'
import * as ReactBootstrap from 'react-bootstrap'



function ImageAllPlans(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(false)
    const [hiddenImage, setHiddenImage] = useState(4);
    
    const loadMore =()=>
    {
        setHiddenImage(hiddenImage + hiddenImage)
    }

    const getFlowers = async()=>
    {
        const flowers = await axios.get('https://61e52378595afe00176e534e.mockapi.io/flower/flower')
        setFlower(flowers.data.slice(0, hiddenImage))
        setLoading(true)
    }
    
    const renderFlower = () => {
        return flowers.map(flower => (
            <div className='col-md-3 col-6' >
                <ImageCard linkimg={flower.imageURL} name={flower.name} price={flower.price} />
            </div>
        ))
        
    }
    useEffect(() => {getFlowers()}, [hiddenImage])
    return (
        <>
        <div className='gallery'>
            <div className='gallery-heading'>
                <div className='gallery-name'>{props.galleryname}</div>
            </div>
            <div className='row thu'>
                 {renderFlower()}
            <ButtonBlack handleClick={()=>loadMore()} text='See more'/>
            </div>
        </div>
        {loading ? ('') : <ReactBootstrap.Spinner animation="border" variant="primary" />}

        </>

    );
}

export default ImageAllPlans;