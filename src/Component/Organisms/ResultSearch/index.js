import React, { useEffect, useState } from 'react';
import ButtonBlack from '../../Atoms/ButtonBlack';
import './style.css'
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import {db} from "../../../firebase-config.js"
import {collection, getDocs} from "firebase/firestore"
import {useParams} from "react-router-dom";



function ResultSearch(props) {
    const [flowers, setFlower] = useState([])
    const productColectionRef = collection(db, "products")
    const [loading, setLoading] = useState(true)
    const [hiddenImage, setHiddenImage] = useState(4);
    const [textBtn, SetTextBtn] = useState('Load More')
    const {name} = useParams()
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
    useEffect(()=>{
        const getFlowers = async()=>
        {
            const data = await getDocs(productColectionRef);
            setFlower(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        };
        getFlowers();
    }, []);
    
    
    
    
    const changeURL =(id, price, name)=>
    {
        const count = flowers.length 
        navigate(`/product`)
    }
    const renderFlower = () => {
        return flowers.map(flower => flower.name.toLowerCase().includes(name.toLowerCase().trim(), 0) ? (
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
        ):"")

    }

    return (
        <>
            <div className='gallery'>
                <div className='gallery-heading'>
                    <div className='gallery-name'>Kết quả tìm kiếm cho <span>{name}</span></div>
                </div>
                <div className='row'>
                    {renderFlower()}
                    <ButtonBlack handleClick={() => loadMore()} text={textBtn} />
                </div>
            </div>

        </>

    );
}

export default ResultSearch;