import React from 'react';
import {Route,Routes, useLocation,useNavigate} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Admin from './pages/Admin';
import PageNotFount from './pages/PageNotFount'
import { useEffect } from 'react';
import {auth, fireStore} from './firebaseConfig'
import { collection,getDocs,query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
function App(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const openPage = ["/","/login","/register"]
    useEffect(()=>{
        let token = localStorage.getItem("token")
        const ref = collection(fireStore,"users")
        const q = query(ref,where("uid","==",token))
        getDocs(q).then((res)=>{
            console.log(res.docs[0]._document.data.value.mapValue.fields);
            let user = res.docs[0]._document.data.value.mapValue.fields;
            signInWithEmailAndPassword(auth,user.email,user.password).then((res)=>{

            })
        }).catch((err)=>{
            if(!openPage.includes(location.pathname)){
                navigate("/404")
            }
        })
     
      
    },[location.pathname])

 
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home   />}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/404' element={<PageNotFount/>}/>
            </Routes>
        </div>
    );
}

export default App;