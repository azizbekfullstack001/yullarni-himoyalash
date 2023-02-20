import {createSlice} from '@reduxjs/toolkit'
const slice = createSlice({
    name:"todos",
    initialState:{
        todos:[],
        inpVal:"",
        currentItem:"",
    },
    reducers:{
       loadTodos:(state,action)=>{
         state.todos = action.payload
         state.inpVal=""
         state.currentItem=""
       },
     changeInp:(state,action)=>{
        state.inpVal= action.payload
            },
            updateTodos:(state,action)=>{
             state.inpVal = action.payload.title
             state.currentItem = action.payload.id
            }
    }
})
const actions = slice.actions
const todoReducer = slice.reducer
function getTodos(){
    return {
        type:"apiCall",
        payload:{
            method:"get",
            collection:"todos",
            onSuccess:actions.loadTodos
        }
    }
}
function handleSave(data){
    return {
        type:"apiCall",
        payload:{
            method:"POST",
            collection:"todos",
            onSuccess:getTodos,
            data
        }
    }
}
function deleteItem(id){
    return {
        type:"apiCall",
        payload:{
            method:"DELETE",
            collection:"todos",
            onSuccess:getTodos,
            id:id
        }
       }
}
function editItem(data){
    return {
        type:"apiCall",
        payload:{
            method:"PUT",
            collection:"todos",
            onSuccess:getTodos,
            data
        }
       }
}
function handleCheck({item,checked}){
    console.log(checked);
    return {
        type:"apiCall",
        payload:{
            method:"PUT",
            collection:"todos",
            onSuccess:getTodos,
            data:{...item,completed:checked}
        }
       }
}

export const todoModel = {...actions,getTodos,handleSave,deleteItem,editItem,handleCheck}
export default todoReducer