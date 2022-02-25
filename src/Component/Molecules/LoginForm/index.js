import React, { useEffect } from 'react';
import { signInWithGoogle, signInWithFacebook, signInWithEmail, auth} from '../../../firebase-config'
import { signInWithEmailAndPassword } from "firebase/auth"

import { useState } from 'react';
import './style.css'

function LoginForm(props) {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const signIn = e =>
    {
        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
    }
    
    return (
        <div className="modal fade" id="login" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <button onClick={signInWithGoogle} type="button" className="social-button gg btn btn-primary btn-md btn-block">
                            <i className="fa-brands fa-google"></i>
                            LOG IN WITH GOOGLE
                        </button>
                        <button onClick={signInWithFacebook} type="button" className="social-button fb btn btn-info btn-md btn-block">
                            <i className="fa-brands fa-facebook-square"></i>
                            LOG IN WITH FACEBOOK
                        </button>
                        <form>
                            <label htmlFor="exampleInputEmail1">----- OR -----</label>
                            <div className="form-group">
                                <input onChange={(e)=>setLoginEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <input onChange={(e)=>setLoginPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <button onClick={()=>signInWithEmail(loginEmail, loginPassword)} type="submit" className="btn btn-primary">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;