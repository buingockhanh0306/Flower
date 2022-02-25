import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {auth} from '../../../firebase-config'

function SignUpForm(props) {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (curentUser)=>{
        setUser(curentUser)
    })

    const register = async () => {
        try{

            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="modal fade" id="signup" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">SIGN UP</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <input onChange={(e) => setRegisterEmail(e.target.value)} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <input onChange={(e) => setRegisterPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                            </div>

                            <button onClick={register} type="submit" className="btn btn-primary">SIGN UP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;