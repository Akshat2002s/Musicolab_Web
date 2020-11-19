import { Button } from '@material-ui/core'
import React from 'react'
import hozier from "./images/hozier.png"
import "./Login.css"
import{auth, provider} from "./firebase"
import { useStateValue } from './StateProvider'
import {actionTypes} from "./reducer"

function Login() {
    const [state, dispatch]= useStateValue();
    const signIn=() =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user)
        }) .catch(error => alert(error.message))
    };
    return (
        <div className='login'>
            <div className="quote">
                <p>I never wrote Music for the Mainstream</p>
                <p>-Hozier</p>
            </div>
            <div className="hozier">
                <img src={hozier} alt=""/>
            </div>
            <div className="login__text">
                Musicolab
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
            
        </div>
    )
}

export default Login
