import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css'
import { signOutUser } from '../../../firebase-config'
import { auth } from '../../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth'

function GroupIcons(props) {
    const navigate = useNavigate();

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (curentUser) => {
        setUser(curentUser)
    })

    const [value, setValue] = useState('')

    const changeURL = () => {
        navigate(`/checkout`)
    }

    const handleSearch = () => {
        navigate(`/search/${value}`)

    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setValue(event.target.value.trim())
            handleSearch()
        }
    }
    const handleHiddenSearch = () => {
        const input_search_group = document.querySelector('.input-search-group')
        const input_search = document.querySelector('.input-search')
        const open = document.querySelector('.open')
        const close = document.querySelector('.close')
        const active = document.querySelector(".active")
        if (active === null) {
            open.style.display = "none";
            close.style.display = "block";
            input_search_group.classList.add("active")
            input_search.focus()
        }
        else {
            open.style.display = "block";
            close.style.display = "none";
            input_search_group.classList.remove("active")
        }
    }
    return (
        <>
            <div className='group-icon-header'>
                <div className='input-search-group'>
                    <input onKeyPress={(e) => handleKeyPress(e)} onChange={e => setValue(e.target.value.trim())} className='input-search' placeholder='Search...' />
                    <button onClick={() => handleSearch()} className='search-btn'><i className="fas fa-search"></i></button>
                </div>


                <button onClick={() => handleHiddenSearch()} className='search-icon'>
                    <i className="open fas fa-search"></i>
                    <i className="close fa-solid fa-xmark"></i>
                </button>

                <button onClick={() => changeURL()} className='cart-icon'>
                    <i className="fas fa-shopping-cart"></i>
                </button>

                <div className='avatar-user'>
                    {user?.photoURL ? <img className='avatar-user-img' src={user?.photoURL} /> : <img className='avatar-user-img' src='assets/images/avatar.png' />}
                    <div className='login-logout'>
                        {user?.displayName || user?.email ?
                            <>
                                <span className='login-logout-item'>
                                    <img src={user?.photoURL || 'assets/images/avatar.png'} />
                                    <span className='name-user'>{user?.displayName || user.email}</span>
                                </span>
                                <hr />
                                <span onClick={()=>navigate('/login')} className='login-logout-item'>
                                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                    Change Account
                                </span>

                                <span onClick={signOutUser} className='login-logout-item logout'>
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    Log out
                                </span>
                            </> :
                            <>
                                <span onClick={()=>navigate('/login')} className='login-logout-item'>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                    Log in
                                </span>
                            </>
                        }
                    </div>



                </div>

            </div>
        </>
    );
}

export default GroupIcons;