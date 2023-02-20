import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import {fireStore} from '../firebaseConfig'
const apiMiddleWare = (store)=>(next)=>(action)=>{
    if(action.type==="apiCall"){
        const ref = collection(fireStore,action.payload.collection)
        /// bu get ZAPROs
        if(action.payload.method.toUpperCase()==="GET"){
            getDocs(ref).then((res)=>{
                let arr = res.docs.map((item)=>{
                    return {...item.data(),id:item.id}
                })
                store.dispatch(action.payload.onSuccess(arr))
             }
             )
        }else if(action.payload.method.toUpperCase()==="POST"){
         addDoc(ref,action.payload.data).then((res)=>{
            store.dispatch(action.payload.onSuccess())
         })
        
        }else if (action.payload.method.toUpperCase()==="DELETE"){
            const oneElementRef = doc(fireStore,action.payload.collection,action.payload.id)
            deleteDoc(oneElementRef).then((res)=>{
                store.dispatch(action.payload.onSuccess())
            })
        }else if (action.payload.method.toUpperCase()==="PUT"){
            let id = action.payload.data.id
            delete action.payload.data.id
            const oneElementRef = doc(fireStore,action.payload.collection,id)
            updateDoc(oneElementRef,action.payload.data).then((res)=>{
   store.dispatch(action.payload.onSuccess())
            })
        }
        
     
   
    }else{
        next(action)
    }

}
export  default apiMiddleWare
