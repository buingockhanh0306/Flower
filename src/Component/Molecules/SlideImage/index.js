import React from 'react';
import LargeImage from '../LargeImage';
import MediumImageContent from '../../Atoms/MediumImageContent';

function SlideImage(props) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <LargeImage />
                </div>
                <div className="carousel-item">
                    <div className='medium'>
                        <img src='assets/images/left.png' />
                        <MediumImageContent toLink='/gifts' title='Nice little gifts' desc='for loved one' />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='medium'>
                        <img src='assets/images/right.png' />
                        <MediumImageContent toLink='/plants' title='Plants' desc='for home comfort' />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default SlideImage;