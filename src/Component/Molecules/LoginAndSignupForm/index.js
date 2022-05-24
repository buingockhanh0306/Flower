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
    const [error, setError] = useState("")
    const [notify, setNotify] = useState("")
    const [user, setUser] = useState("")
    const navigate = useNavigate()

    const container = document.getElementById('login-form');
    const forgot = document.querySelector('.forgot-container')
    const signin = document.querySelector('.sign-in-container')


    onAuthStateChanged(auth, (curentUser) => {
        setUser(curentUser)
    })


    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return inputText.match(mailformat) ? true : false
    }

    function ValidatePassword(inputPass) {
        var passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return inputPass.match(passwordFormat) ? true : false
    }

    const register = async (e) => {
        e.preventDefault()
        try {
            if (ValidateEmail(registerEmail) && ValidatePassword(registerPassword)) {
                const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
                setNotify("Sign up success!")
                setError("")
            }
            else if (!ValidateEmail(registerEmail)) {
                setNotify("")
                setError("You have entered an invalid email address")
            }
            else {
                setNotify("")
                setError("Password must be minimum eight characters, at least one letter and one number")
            }

        } catch (err) {
            setError("Email already exist")
        }


    }

    const signIn = async (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/')
            })
            .catch((err) => {
                setError("Sai teen ")
            });
    }

    const handleResetPassword = async (event) => {
        event.preventDefault()
        if (ValidateEmail(forgotPassword)) {
            sendPasswordResetEmail(auth, forgotPassword)
            setNotify("Send")
            setError("")
        }
        else {
            setError("You have entered an invalid email address")
            setNotify("")
        }
    }

    const removeClass = () => {
        container.classList.remove("right-panel-active");
        setError("")
    }

    const addClass = () => {
        container.classList.add("right-panel-active");
        setError("")
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
                    <form name='signup' action="#">
                        <h1 className='login-title'>Create Account</h1>

                        <input onChange={e => { setRegisterEmail(e.target.value); setError(""); setNotify("") }} className='login-input' type="email" placeholder="Email" />
                        <input onChange={e => { setRegisterPassword(e.target.value); setError(""); setNotify("") }} className='login-input' type="password" placeholder="Password" />
                        {notify !== "" ? <span className='message notifyMessage'>{notify}</span> : (error !== "" ? <span className='message errMessage'>{error}</span> : "")}
                        <button type='submit' onClick={register} className='login-btn'>Sign Up</button>
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
                        <input onChange={e => { setLoginEmail(e.target.value); setError("") }} className='login-input' type="email" placeholder="Email" />
                        <input onChange={e => { setLoginPassword(e.target.value); setError("") }} className='login-input' type="password" placeholder="Password" />
                        {error !== "" ? <span className='message errMessage'>{error}</span> : ""}
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
                            <input onChange={e => { setForgotPassword(e.target.value); setError("") }} className='login-input' type="email" placeholder="Email" />
                            {notify !== "" ? <span className='message notifyMessage'>{notify}</span> : (error !== "" ? <span className='message errMessage'>{error}</span> : "")}
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