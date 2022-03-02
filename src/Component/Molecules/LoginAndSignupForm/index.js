import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { signInWithGoogle, signInWithFacebook, auth } from '../../../firebase-config'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    createUserWithEmailAndPassword
}
    from "firebase/auth"

import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

function LoginAndSignupForm(props) {
    const [loginEmail, setLoginEmail] = useState("")
    const [forgotPassword, setForgotPassword] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [user, setUser] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const container = document.getElementById('login-form');
    const forgot = document.querySelector('.forgot-container')
    const signin = document.querySelector('.sign-in-container')

    const notify = () => toast("Đã thêm vào giỏ hàng");

    onAuthStateChanged(auth, (curentUser) => {
        setUser(curentUser)
    })

    const register = async (e) => {
        e.preventDefault()
        try {

            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        }
        catch (error) {
            console.log(error.message);
        }
        removeClass()

    }

    const signIn = async (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            });
        navigate('/')
    }
    const handleResetPassword = async (event) => {
        event.preventDefault()
        sendPasswordResetEmail(auth, forgotPassword).then(() => {
            notify()

        })
            .catch((error) => {
                console.log(error)
            })
    }

    const removeClass = () => {
        container.classList.remove("right-panel-active");
    }
    const addClass = () => {
        container.classList.add("right-panel-active");
    }

    const handleForgot = () => {
        forgot.style.display = "block"
        signin.style.display = "none"
    }
    const handleReturn = () => {
        forgot.style.display = "none"
        signin.style.display = "block"
    }


    return (
        <div className='login'>
            <div className='login-form' id='login-form'>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className='login-title'>Create Account</h1>

                        <input onChange={e => setRegisterEmail(e.target.value)} className='login-input' type="email" placeholder="Email" />
                        <input onChange={e => setRegisterPassword(e.target.value)} className='login-input' type="password" placeholder="Password" />
                        <button onClick={register} className='login-btn'>Sign Up</button>
                    </form>
                </div>


                <div className="form-container sign-in-container">
                    <form>
                        <h1 className='login-title'>Sign in</h1>
                        <div className="social-container">
                            <a onClick={signInWithFacebook} className="login-link social"><i className="fab fa-facebook-f" /></a>
                            <a onClick={signInWithGoogle} className="login-link social"><i className="fab fa-google-plus-g" /></a>
                        </div>
                        <span className='login-span'>or use your account</span>
                        <input onChange={e => setLoginEmail(e.target.value)} className='login-input' type="email" placeholder="Email" />
                        <input onChange={e => setLoginPassword(e.target.value)} className='login-input' type="password" placeholder="Password" />
                        <a onClick={() => handleForgot()} className='login-link'>Forgot your password?</a>
                        <button onClick={signIn} className='login-btn'>Sign In</button>
                    </form>
                </div>

                <div className="form-container forgot-container">
                    <form>
                        <ToastContainer
                            position="top-left"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                        />
                        <h1 className='login-title'>Forgot Password</h1>
                        <div className='email-reset'>
                            <span className='login-span'>Enter your email</span>
                            <input onChange={e => setForgotPassword(e.target.value)} className='login-input' type="email" placeholder="Email" />
                        </div>
                        <button onClick={handleResetPassword} className='login-btn reset'>reset password</button>
                        <span onClick={() => handleReturn()} className='return'><i className="fa-solid fa-angle-left"></i>Return Login</span>
                    </form>
                </div>


                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className='login-title title-overlay'>Welcome Back!</h1>
                            <button onClick={() => removeClass()} className="login-btn ghost" id="signIn">Sign In</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1 className='login-title title-overlay'>Hello, Friend!</h1>
                            <button onClick={() => addClass()} className="login-btn ghost" id="signUp">Sign Up</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default LoginAndSignupForm;