import React from 'react';
import FooterLinkItem from '../../Atoms/FooterLinkItem';
import HeadingFooter from '../../Atoms/HeadingFooter';
import './style.css'
function GroupItem2(props) {
    return (
        <div className='center'>
            <HeadingFooter text = 'Help'/>
            <FooterLinkItem nameitem='Contact Us'/>
            <FooterLinkItem nameitem='Delivery Information'/>
            <FooterLinkItem nameitem='Payment Information'/>
            <FooterLinkItem nameitem='Customer Sevice'/>
            <FooterLinkItem nameitem='FAQ'/>
        </div>
    );
}

export default GroupItem2;