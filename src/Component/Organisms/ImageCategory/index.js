import React, { useEffect, useState } from 'react';
import ButtonBlack from '../../Atoms/ButtonBlack';
import './style.css'
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../../firebase-config.js"
import { collection, getDocs } from "firebase/firestore"
import ImageCard from '../../Molecules/ImageCard';



function ImageCategory(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(true)
    const [hiddenImage, setHiddenImage] = useState(4);
    const [textBtn, SetTextBtn] = useState('Load More')
    const productColectionRef = collection(db, "products")

    const navigate = useNavigate();

    const { category } = useParams()
    const loadMore = () => {
        hiddenImage > 4 ? setHiddenImage(4) : (setHiddenImage(hiddenImage + hiddenImage))
        if (hiddenImage > 4) {
            setHiddenImage(4)
            setLoading(true)
            SetTextBtn('Load More')
        }
        else {
            setHiddenImage(hiddenImage + hiddenImage);
            setLoading(true)
            SetTextBtn('Hide Less')
        }
    }

    useEffect(() => {
        const getFlowers = async () => {
            const data = await getDocs(productColectionRef);
            setFlower(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(doc => doc.category === category));
        };
        getFlowers();
    }, [category]);


    const renderFlower = () => {
        return flowers.map(flower => (
            <div key={flower.id} className='col-md-3 col-6' >
                <ImageCard id={flower.id} linkimg={flower.imageURL} name={flower.name} price={flower.price} />
            </div>
        ))

    }

    return (
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