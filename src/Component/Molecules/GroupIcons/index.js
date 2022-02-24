import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css'
import { signInWithGoogle, signInWithFacebook } from '../../../firebase-config'

function GroupIcons(props) {
    const avatarImg = localStorage.getItem('avatar')  //firebase-config 
    const [value, setValue] = useState('')
    const navigate = useNavigate();
    const changeURL = () => {
        navigate(`/checkout`)
    }

    const handleSearch = () => {
        navigate('/search')

    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // console.log('Đã bấm enter')
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
                    <img className='avatar-user-img' src={avatarImg} />
                    {/* {
                    avatarImg ? 
                    <div className='login-logout'>
                        <span data-toggle="modal" data-target="#login" className='login-logout-item'><i className="fa-solid fa-right-to-bracket"></i>Đăng xuất</span>
                    </div> :  */}
                    <div className='login-logout'>
                        <span data-toggle="modal" data-target="#login" className='login-logout-item'><i className="fa-solid fa-right-to-bracket"></i>Đăng nhập</span>
                        <hr />
                        <span className='login-logout-item'><i className="fa-solid fa-user-plus"></i>Đăng ký</span>
                    </div>
                    
                    {/* Modal */}

                    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Đăng nhập</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <button onClick={signInWithGoogle} type="button" class="btn btn-primary btn-md btn-block">Đăng nhập bằng Google</button>
                                    <button onClick={signInWithFacebook} type="button" class="btn btn-info btn-md btn-block">Đăng nhập bằng Facebook</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Modal */}


                </div>

            </div>
        </>
    );
}

export default GroupIcons;