import React from 'react';
import ProductImage from '../../Atoms/ProductImage';
import ProductInfo from '../../Molecules/ProductInfo';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css'
import {db} from "../../../firebase-config.js"
import {collection, getDocs} from "firebase/firestore"

function ContentCard(props) {
    const [flowers, setFlower] = useState([])
    const [loading, setLoading] = useState(true)
    const productColectionRef = collection(db, "products")
    
    const idlocal =  localStorage.getItem('id')

    useEffect(()=>{
        const getFlowers = async()=>
        {
            const data = await getDocs(productColectionRef);
            setFlower(data.docs.map((doc)=>({...doc.data(), id:doc.id})).filter(doc=>doc.id===idlocal));
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