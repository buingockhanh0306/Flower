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
    const [valueFilter, setValueFilter] = useState("");

    const navigate = useNavigate();

    const { category, filter } = useParams()


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
            switch (valueFilter) {
                case "last":
                    setFlower(data.docs.map((doc) => (
                        { 
                            ...doc.data(), id: doc.id 
                        })).filter(doc => doc.category === category).sort());
                    break;
                case "old":
                    setFlower(data.docs.map((doc) => (
                        { 
                            ...doc.data(), id: doc.id 
                        })).filter(doc => doc.category === category).reverse());
                    break;
                case "under":
                    setFlower(data.docs.map((doc) => (
                        {
                            ...doc.data(), id: doc.id
                        })).filter(doc => doc.category === category && doc.price <= 10));
                    break;
                case "10to50":
                        setFlower(data.docs.map((doc) => (
                            {
                                ...doc.data(), id: doc.id
                            })).filter(doc => doc.category === category && (doc.price >= 10 && doc.price <= 50)));
                        break;
                case "50to100":
                    setFlower(data.docs.map((doc) => (
                        {
                             ...doc.data(), id: doc.id 
                        })).filter(doc => doc.category === category && (doc.price >= 50 && doc.price <= 100)));
                    break;
                case "over":
                    setFlower(data.docs.map((doc) => (
                        {
                            ...doc.data(), id: doc.id
                        })).filter(doc => doc.category === category && doc.price >=100));
                    break;
                default:
                    setFlower(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(doc => doc.category === category));
                setLoading(false)
            
            }
        };
        getFlowers();
    }, [category, valueFilter]);


    const renderFlower = () => {
        return loading ? <div className='loading'><ClipLoader color='#D78536' loading={loading} size={30} /></div> :
        flowers.length === 0 ? <h3 className='no-product_notify'>No Products Found</h3> : 
        flowers.map(flower => (
            <div key={flower.id} className='col-md-3 col-6' >
                <ImageCard id={flower.id} linkimg={flower.imageURL} name={flower.name} price={flower.price} />
            </div>
        ))

    }

    return (
        <>
            <div className='select-count'>
                <div className='group-select'>
                    <div className='drop-list'>
                        <select onChange={e => setValueFilter(e.target.value)} className='select' aria-label="Default select example">
                            <option defaultValue="">Sort By</option>
                            <option value="last">Lastest</option>
                            <option value="old">Oldest</option>
                        </select>
                    </div>

                    <div className='drop-list'>
                        <select onChange={(e) => setValueFilter(e.target.value)} className='select' aria-label="Default select example">
                            <option defaultValue="price">Price</option>
                            <option value="under">Under $10</option>
                            <option value="10to50">$10 - $50</option>
                            <option value="50to100">$50 - $100</option>
                            <option value="over">Over $100</option>
                        </select>
                    </div>
                </div>
                <div className='count'>{flowers.length} items</div>
            </div>
            <div className='line'></div>
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