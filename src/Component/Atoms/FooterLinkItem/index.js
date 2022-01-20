import React from 'react';
import './style.css'

function FooterLinkItem(props) {
    return (
        <div className='linkitem'>
            <a href=''>{props.nameitem}</a>
        </div>
    );
}

export default FooterLinkItem;