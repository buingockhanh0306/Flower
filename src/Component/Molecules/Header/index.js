import React, {Component} from 'react';
import Location from '../../Atoms/Location';
import Heading from '../../Atoms/Heading';
import GroupIcons from '../GroupIcons';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

function Header(props) {
    // const isMobileScreen = useMediaQuery({ query: '(max-width: 46.1875em)' })
    const menu = document.querySelector('.nav-mobile_nav')
    const openNav = document.querySelector('.open-nav')
    const handleNav = ()=>
    {
        menu.classList.toggle('open-nav')
    }
    
    const navigate = useNavigate()
    const changeURL = (path)=>{
        navigate(path)
        menu.classList.remove('open-nav')
    }
    return (
        <div className='header'>
            <div className='container-md'>
                <div className='row'>
                    <div className='col-4'>
                        <Location/>

                    <div className='col-12 nav-mobile'>
                        <div onClick={()=>handleNav()}><i className="fa-solid fa-bars"></i></div>
                        <ul className='nav-mobile_nav'>
                            <li onClick={()=>changeURL('/flowers')} className='nav-mobile_item'>Flowers</li>
                            <li onClick={()=>changeURL('/plants')} className='nav-mobile_item'>Plants</li>
                            <li onClick={()=>changeURL('/gifts')} className='nav-mobile_item'>Gifts</li>
                            <li onClick={()=>changeURL('/disconts')} className='nav-mobile_item'>Disconts</li>
                            <li onClick={()=>changeURL('/about')} className='nav-mobile_item'>About us</li>
                        </ul>
                    </div>

                    </div>

                    <div className='col-4'>
                        <Heading text = 'CASSIOPEIA'/>
                    </div>

                    <div className='col-4'>
                         <GroupIcons/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;