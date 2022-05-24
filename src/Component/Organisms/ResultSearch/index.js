import React, { useEffect, useState } from 'react';
import ButtonBlack from '../../Atoms/ButtonBlack';
import './style.css'
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../../firebase-config.js"
import { collection, getDocs } from "firebase/firestore"
import { useParams } from "react-router-dom";
import ImageCard from '../../Molecules/ImageCard';



function ResultSearch(props) {
    const [flowers, setFlower] = useState([])
    const productColectionRef = collection(db, "products")
    const [loading, setLoading] = useState(true)
    const [hiddenImage, setHiddenImage] = useState(4);
    const [textBtn, SetTextBtn] = useState('Load More')
    const { name } = useParams()
    const navigate = useNavigate();


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
            setFlower(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getFlowers();
    }, []);




    const changeURL = (id, price, name) => {
        const count = flowers.length
        navigate(`/product`)
    }
    const renderFlower = () => {
        return flowers.map(flower => flower.name.toLowerCase().includes(name.toLowerCase().trim(), 0) ? (
            <div key={flower.id} className='col-md-3 col-6' >
                    <ImageCard id={flower.id} linkimg={flower.imageURL} name={flower.name} price={flower.price} />
                </div>
        ) : "")

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