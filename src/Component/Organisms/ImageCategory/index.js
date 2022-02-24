import React, { useEffect, useState } from 'react';
import ButtonBlack from '../../Atoms/ButtonBlack';
import './style.css'
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import flowerAPI from '../../../api/flowerAPI';



function ImageCategory(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(true)
    const [hiddenImage, setHiddenImage] = useState(4);
    const [textBtn, SetTextBtn] = useState('Load More')
    // const [count, setCount] = useState(0)
    const navigate = useNavigate();

    const loadMore = () => {
        hiddenImage > 4 ? setHiddenImage(4):(setHiddenImage(hiddenImage+hiddenImage))
        if(hiddenImage>4)
        {
            setHiddenImage(4)
            setLoading(true)
            SetTextBtn('Load More')
        }
        else{
            setHiddenImage(hiddenImage+hiddenImage);
            setLoading(true)
            SetTextBtn('Hide Less')
        }
    }

    const color =localStorage.getItem('color')
    const getFlowers = async () => {
        const flowers = await flowerAPI.getAll({'category': props.category})
        if(color==="Color")
        {
            setFlower(flowers.data)
        }
        else{
            setFlower(flowers.data.filter(flower => flower.color === color).slice(0, hiddenImage))
        }
        setLoading(false)
    }
    
    
    
    useEffect(() => { getFlowers() }, [hiddenImage, color])
    
    const changeURL =(id, price, name)=>
    {
        
        navigate(`/product`)
    }

    const renderFlower = () => {
        return flowers.map(flower => (
            <div key={flower.id} className='col-md-3 col-6' >
                <div className='image-card'>
                    <img src={flower.imageURL} />
                    <div className='card-text'>
                        <button onClick={()=>changeURL(flower.id, flower.price, flower.name)} className='flower-name'>{flower.name}</button>
                        <div className='flower-price'>{flower.price}</div>
                        <span><i className="fas fa-dollar-sign"></i></span>
                    </div>
                    <div className='image-card_icon'>
                        <button className='image-card_icon-item'><i className="far fa-heart"></i></button>
                        <button onClick={()=>changeURL(flower.id, flower.price, flower.name)} className='image-card_icon-item'><i className="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        ))

    }

    return (
        loading ? <div className='loading'><ClipLoader color='#D78536' loading={loading} size={30} /></div> :
        <>
            <div className='gallery'>
                <div className='gallery-heading'>
                    <div className='gallery-name'>{props.galleryname}</div>
                </div>
                <div className='row'>
                    {renderFlower()}
                    <ButtonBlack handleClick={() => loadMore()} text={textBtn} />
                </div>
            </div>

        </>

    );
}

export default ImageCategory;