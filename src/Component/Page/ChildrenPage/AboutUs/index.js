import React from 'react';
import Heading from '../../../Atoms/Heading';
import './style.css'
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

            <h2 className='about-heading'>COMUNITY</h2>
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
               
            <h2 className='about-heading'>ACTIVITY</h2>
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
                    <img src='assets/images/activity.jpg' />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;