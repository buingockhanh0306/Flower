import React from 'react';
import FooterLinkItem from '../../Atoms/FooterLinkItem';
import HeadingFooter from '../../Atoms/HeadingFooter';
import './style.css'
function GroupItem4(props) {
    return (
        <div className='center'>
            <HeadingFooter text = 'Legal'/>
            <FooterLinkItem nameitem='Privaci Policy'/>
            <FooterLinkItem nameitem='Teams & Conditions'/>
            <FooterLinkItem nameitem='Cookie policy'/>
        </div>
    );
}

export default GroupItem4;