import React, {useEffect, useState} from 'react';
import ImageCard from '../../Molecules/ImageCard';
import './style.css'
import {db} from "../../../firebase-config.js"
import {collection, getDocs} from "firebase/firestore"
import ClipLoader from "react-spinners/ClipLoader";

function Gallery1(props) {
    const [flowers, setFlower] = useState([])
    const productColectionRef = collection(db, "products")
    const [loading, setLoading] = useState(true)
    const [x, setX] = useState(0);

    
   
    useEffect(()=>{
        const getFlowers = async()=>
        {
            const data = await getDocs(productColectionRef);
            setFlower(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
            setLoading(false)
        };
        getFlowers();
    }, []);
        


    const renderFlower = () => {
        return loading ? <div className='loading'><ClipLoader color='#D78536' loading={loading} size={30} /></div> :(
            flowers.map(flower => (
                <div key={flower.id} className='col-md-3 col-6' >
                    <ImageCard id={flower.id} linkimg={flower.imageURL} name={flower.name} price={flower.price} />
                </div>
            ))
        ) 
        
    }
    
    const toLeft = ()=>
    {
        x===0 ? setX(0) : setX(x+25)
    }
    const toRight = ()=>
    {
        x===-25 * (flowers.length-4) ? setX(x) : setX(x-25)
    }
    return (
        <div className='gallery'>
            <div className='gallery-heading'>
                <div className='gallery-name'>{props.galleryname}</div>
                <div className='gallery-arrow'>
                    <button className='arrow-btn' onClick={toLeft}>
                         <i className="arrow1 fas fa-long-arrow-alt-left"></i>
                    </button>
                    <button className='arrow-btn' onClick={toRight}>
                         <i className="arrow2 fas fa-long-arrow-alt-right"></i>
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