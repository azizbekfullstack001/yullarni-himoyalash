import React from 'react';
import {auth} from '../firebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import    {getAuth} from 'firebase/auth'
import {collection,addDoc} from 'firebase/firestore'
import { fireStore } from '../firebaseConfig';
function Register(props) {
   const navigate = useNavigate()
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
    function register(){
    createUserWithEmailAndPassword(auth,email,password).then((res)=>{
     
        const ref = collection(fireStore,"users")
        addDoc(ref,{
            email:email,
            password:password,
            uid:res.user.uid
        }).then((res)=>{
            navigate("/login")
        })
    }).catch((err)=>{
       toast.error("tizimda xatolik")
    })
    }
    return (
        <div>
       

            <div className='card w-50 offset-3'>
                 <div className='card-header'>
                 <h1>SignUp</h1>
                 </div>
                 <div className='card-body'>
<input value={email} onChange={(e)=>setEmail(e.target.value)}  type={"text"} placeholder="email" className='form-control my-2'/>
<input value={password} onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder="password" className='form-control my-2'/>
                 </div>
                 <div className='card-footer'>
<button className='btn btn-info' onClick={register}>register</button>
                 </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Register;