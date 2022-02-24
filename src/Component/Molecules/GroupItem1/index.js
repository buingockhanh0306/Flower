import React from 'react';
import FooterLinkItem from '../../Atoms/FooterLinkItem';
import HeadingFooter from '../../Atoms/HeadingFooter';
import './style.css'
function GroupItem1(props) {
    return (
        <div className='center'>
            <HeadingFooter text = 'Follow Us'/>
            <FooterLinkItem nameitem='+84 9814 5813'/>
            <div className='group-icon'>
                <a className='item-icon'><i className="fab fa-instagram"></i></a>
                <a className='item-icon'><i className="fas fa-sms"></i></a>
                <a className='item-icon'><i className="fab fa-facebook-f"></i></a>
            </div>
        </div>
    );
}

export default GroupItem1;