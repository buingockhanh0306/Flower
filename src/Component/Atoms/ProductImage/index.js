import React from 'react';
import './style.css'

function ProductImage(props) {
    return (
        <div className='product-img pro'>
            <img src={props.imgURL}/>
            <div className='row group-pick'>
                <div className='col-4 pick-item'>
                    <div className='circle-icon fontsize'>Free</div>
                    <div className='text'>
                        <p>Benefits</p>
                        <p>Description</p>
                    </div>
                </div>
                <div className='col-4 pick-item'>
                    <div className='circle-icon fontsize'>Free</div>
                    <div className='text'>
                        <p>Always fresh</p>
                        <p>flowers</p>
                    </div>
                </div>
                <div className='col-4 pick-item'>
                    <div className='circle-icon'><i className="fas fa-camera"></i></div>
                    <div className='text'>
                        <p>Take photo</p>
                        <p>of bouqest</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductImage;