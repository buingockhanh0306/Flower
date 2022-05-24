import React from 'react';
import Heading from '../../../Atoms/Heading';
import './style.css'
import { Link } from 'react-router-dom';
function AboutUs(props) {
    return (
        <div className="container about">
            <h2 className='about-heading'>ABOUT</h2>
            <div className="row">
                <div className="col-6 about-text">
                    <p>
                        Containers center and horizontally pad your content. Use
                        .container for a responsive pixel width, .container-fluid
                        for width: 100% across all viewports and devices, or a
                        responsive container (e.g., .container-md) for a combination
                        of fluid and pixel widths.
                        Rows are wrappers for columns. Each column has horizontal padding
                        (called a gutter) for controlling the space between them. This
                        padding is then counteracted on the rows with negative margins
                        to ensure the content in your columns is visually aligned down
                        the left side. Rows also support modifier classNamees to uniformly
                        apply column sizing and gutter classNamees to change the spacing of your content.
                        Columns are incredibly flexible. There are 12 template columns
                        available per row, allowing you to create different combinations
                        of elements that span any number of columns. Column classNamees indicate
                        the number of template columns to span (e.g., col-4 spans four). widths
                        are set in percentages so you always have the same relative sizing.
                    </p>
                </div>
                <div className="col-6">
                    <img src='assets/images/about.jpg' />
                </div>
            </div>

            <h2 className='about-heading'>COMMUNITY</h2>
            <div className="row dirc">
                <div className="col-6 about-text">
                    <p>
                        Containers center and horizontally pad your content. Use
                        .container for a responsive pixel width, .container-fluid
                        for width: 100% across all viewports and devices, or a
                        responsive container (e.g., .container-md) for a combination
                        of fluid and pixel widths.
                        Rows are wrappers for columns. Each column has horizontal padding
                        (called a gutter) for controlling the space between them. This
                        padding is then counteracted on the rows with negative margins
                        to ensure the content in your columns is visually aligned down
                        the left side. Rows also support modifier classNamees to uniformly
                        apply column sizing and gutter classNamees to change the spacing of your content.
                        Columns are incredibly flexible. There are 12 template columns
                        available per row, allowing you to create different combinations
                        of elements that span any number of columns. Column classNamees indicate
                        the number of template columns to span (e.g., col-4 spans four). widths
                        are set in percentages so you always have the same relative sizing.
                    </p>
                </div>
                <div className="col-6">
                    <img src='assets/images/about2.jpg' />
                </div>
            </div>

            <h2 className='about-heading'>CONTACT</h2>
            <div className="row">
                <div className="col-6 about-text">
                    <div className='contact-item'>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>07th Floor, Golden Field Building, 24 Nguyen Co Thach Street, Hanoi, Vietnam </span>
                    </div>
                    <div className='contact-item'>
                        <i className="fa-solid fa-phone"></i>
                        <span>Phone: +(84).839.716.099</span>
                    </div>
                    <div className='contact-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <span>Email: khanhbn@reactplus.jp</span>
                    </div>

                    <div className='row'>
                        <div className="col-6">
                            <input required className='input-row1' type="text" placeholder='Name'/>
                        </div>
                        <div className="col-6">
                            <input required className='input-row1' type="text" placeholder='Email'/>
                        </div>
                    </div>

                    <input required className='message' type="text" placeholder='Message'/>

                    <button type='submit' className='send'>SEND</button>
                </div>
                <div className="col-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.942817604326!2d105.7634631144075!3d21.034973892943217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b93c73ca9d%3A0x210784911132ebe!2zMjQgUGjhu5EgTmd1eeG7hW4gQ8ahIFRo4bqhY2gsIE3hu7kgxJDDrG5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1645084273523!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                </div>
            </div>

        </div>
    );
}

export default AboutUs;