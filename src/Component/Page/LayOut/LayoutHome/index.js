import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../Molecules/Header';
import NavBar from '../../../Molecules/NavBar';
import Footer from '../../../Organisms/Footer';

function LayoutHome(props) {
    return (
        <div className="grid">
            <div className='container-md over'>
                <Header/>
                <NavBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default LayoutHome;