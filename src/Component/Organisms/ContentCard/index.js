import React from 'react';
import ProductImage from '../../Atoms/ProductImage';
import ProductInfo from '../../Molecules/ProductInfo';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './style.css'
import {db} from "../../../firebase-config.js"
import {collection, getDocs} from "firebase/firestore"

function ContentCard(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(true)
    const productColectionRef = collection(db, "products")
    
    const {id} = useParams()
    useEffect(()=>{
        const getFlowers = async()=>
        {
            const data = await getDocs(productColectionRef);
            setFlower(data.docs.map((doc)=>({...doc.data(), id:doc.id})).filter(doc=>doc.id===id));
        };
        getFlowers();
    }, []);

    
    const renderFlower = () => {
        return (
            flowers.map(flower =>
                (
                    <ProductImage key={flower.id} imgURL={flower.imageURL}/>
            ))
        )
        
    }
    return (
         <div className='row margin'>
            <div className='col-6'>
                {renderFlower()}
            </div>
            <div className='col-6'>
                <ProductInfo/>
            </div>

        </div>
    );
}

export default ContentCard;