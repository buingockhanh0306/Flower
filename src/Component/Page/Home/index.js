import React from 'react';
import Header from '../../Molecules/Header';
import NavBar from '../../Molecules/NavBar';
import LargeImage from '../../Molecules/LargeImage';
import MediumImage from '../../Molecules/MediumImage';
import Gallery1 from '../../Organisms/Gallery1';
import Footer from '../../Organisms/Footer';


function Home(props) {
    return (
        <div className="grid">
            <div className='container-md over'>
                <Header/>
                <NavBar/>
                <LargeImage/>
                <MediumImage/>
                <Gallery1 galleryname='New'/>
                <Gallery1 galleryname='Relevant'/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;