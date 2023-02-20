import React from 'react';
import {auth} from '../firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login(props) {
   const navigate = useNavigate()
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
function login(){
signInWithEmailAndPassword(auth,email,password).then((res)=>{
    localStorage.setItem("token",res.user.uid)
    navigate("/admin")
}).catch((err)=>{
   navigate("/404")
})
    }
    return (
        <div>
       

            <div className='card w-50 offset-3'>
                 <div className='card-header'>
                 <h1>Login</h1>
                 </div>
                 <div className='card-body'>
<input value={email} onChange={(e)=>setEmail(e.target.value)}  type={"text"} placeholder="email" className='form-control my-2'/>
<input value={password} onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder="password" className='form-control my-2'/>
                 </div>
                 <div className='card-footer'>
<button className='btn btn-info' onClick={login}>login</button>
                 </div>
            </div>
        </div>
    );
}

export default Login;