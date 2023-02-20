import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {todoModel} from '../Redux/todoReducer'
function Admin(props) {
    return (
        <div>
           <div className='d-flex'>
           <input  onChange={(e)=>props.changeInp(e.target.value)} className='form-control w-25' type={"text"} placeholder="title" value={props.inpVal}/>
           {
            props.currentItem==""?  <button onClick={()=>props.handleSave({title:props.inpVal,completed:false})} className='btn btn-success'>save</button>
            :
            <button onClick={()=>props.editItem({title:props.inpVal,completed:false,id:props.currentItem})} className='btn btn-info'>update</button>
           }
           </div>
        <ul>
        {
               props.todos.map((item,index)=>{
                return <li key={item.id}>
            <label>
         <span className={item.completed?"text-decoration-line-through":""}>   {item.title}</span>
            <input type={"checkbox"} checked={item.completed} onChange={(e)=>props.handleCheck({item,checked:e.target.checked})}/>
            </label>
                <button onClick={()=>props.deleteItem(item.id)} className='btn btn-danger'>X</button>
                <button onClick={()=>props.updateTodos(item)} className='btn btn-success'>edit</button>
                </li>
               }) 
            }
        </ul>
        </div>
    );
}

export default connect((state)=>({...state.todo}),{...todoModel})(Admin) ;