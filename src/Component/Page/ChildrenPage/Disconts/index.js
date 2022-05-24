import React from 'react';
import ButtonArrR from '../../../Atoms/ButtonArrR';
import './style.css'
import { Link } from 'react-router-dom';

function Disconts(props) {
    return (
        <div className="container disconts">
            <h2 className='disconts-heading'>DISCONTS</h2>
            <div className="row">
                <div className="col-6 disconts-text">
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
                        the left side. Rows also support modifier classes to uniformly
                        apply column sizing and gutter classes to change the spacing of your content.
                        Columns are incredibly flexible. There are 12 template columns
                        available per row, allowing you to create different combinations
                        of elements that span any number of columns. Column classes indicate
                        the number of template columns to span (e.g., col-4 spans four). widths
                        are set in percentages so you always have the same relative sizing.
                    </p>
                    <Link to='/' className='content-btn'>
                        Shop now
                        <i className="arr disconts-arr fas fa-long-arrow-alt-right"></i>
                    </Link>
                </div>
                <div className="col-6 disconts-img">
                    <img src='assets/images/disconts1.jpg' />
                </div>
            </div>

            <h2 className='disconts-heading'>BIGEST SALE</h2>
            <div className="row dirc">
                <div className="col-6 disconts-text">
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
                        the left side. Rows also support modifier classes to uniformly
                        apply column sizing and gutter classes to change the spacing of your content.
                        Columns are incredibly flexible. There are 12 template columns
                        available per row, allowing you to create different combinations
                        of elements that span any number of columns. Column classes indicate
                        the number of template columns to span (e.g., col-4 spans four). widths
                        are set in percentages so you always have the same relative sizing.
                    </p>
                    <Link to='/' className='content-btn'>
                        Shop now
                        <i className="arr disconts-arr fas fa-long-arrow-alt-right"></i>
                    </Link>
                </div>
                <div className="col-6 disconts-img">
                    <img src='assets/images/disconts.jpg' />
                </div>
            </div>
        </div>
    );
}

export default Disconts;