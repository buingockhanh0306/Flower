import React, { useEffect, useState } from 'react';
import ImageCard from '../../Molecules/ImageCard';
import axios from 'axios';
import ButtonBlack from '../../Atoms/ButtonBlack';
import './style.css'
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";



function ImageCategory(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(true)
    const [hiddenImage, setHiddenImage] = useState(4);
    const navigate = useNavigate();


    const loadMore = () => {
        setHiddenImage(hiddenImage + hiddenImage)
    }

    const getFlowers = async () => {
        const flowers = await axios.get(`https://61e52378595afe00176e534e.mockapi.io/flower/flower?category=${props.category}`)
        setFlower(flowers.data.slice(0, hiddenImage))
        setLoading(false)
    }

    const changeURL =(id, price, name)=>
    {
        localStorage.setItem('id', id)     
        localStorage.setItem('price', price)     
        localStorage.setItem('name', name)     
        navigate(`/product`)
    }

    const renderFlower = () => {
        return flowers.map(flower => (
            <div className='col-md-3 col-6' >
                <div className='image-card'>
                    <img src={flower.imageURL} />
                    <div className='card-text'>
                        <button onClick={()=>changeURL(flower.id, flower.price, flower.name)} className='flower-name'>{flower.name}</button>
                        <div className='flower-price'>{flower.price}</div>
                        <span><i class="fas fa-dollar-sign"></i></span>
                    </div>
                    <div className='image-card_icon'>
                        <button className='image-card_icon-item'><i class="far fa-heart"></i></button>
                        <button onClick={()=>changeURL(flower.id, flower.price, flower.name)} className='image-card_icon-item'><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        ))

    }
    useEffect(() => { getFlowers() }, [hiddenImage])
    return (
        loading ? <div className='loading'><ClipLoader color='#D78536' loading={loading} size={30} /></div> :
        <>
            <div className='gallery'>
                <div className='gallery-heading'>
                    <div className='gallery-name'>{props.galleryname}</div>
                </div>
                <div className='row thu'>
                    {renderFlower()}
                    <ButtonBlack handleClick={() => loadMore()} text='See more' />
                </div>
            </div>
            {/* {loading ? ('') : <ReactBootstrap.Spinner animation="border" variant="primary" />} */}

        </>

    );
}

export default ImageCategory;