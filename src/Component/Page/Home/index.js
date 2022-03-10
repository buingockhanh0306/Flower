import React from 'react';
import LargeImage from '../../Molecules/LargeImage';
import MediumImage from '../../Molecules/MediumImage';
import SlideImage from '../../Molecules/SlideImage';
import Gallery1 from '../../Organisms/Gallery1';
import Gallery2 from '../../Organisms/Gallery2';
import './style.css'


function Home(props) {
    return (
        <div className="grid">
            <div className='container-md over'>
                <div className='banner-pc'>
                    <LargeImage />
                    <MediumImage />
                </div>
                <div className='slide-mobile'>
                    <SlideImage/>
                </div>
                <Gallery1 galleryname='New' />
                <Gallery2 galleryname='Relevant' />
            </div>
        </div>
    );
}

export default Home;