import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {deltask, compettask} from '../../JS/Actions/Action'
import './ListTask.css'
import Edit from '../Edit/Edit'

function ListTask({status}) {
    const Items = useSelector(state => state.todoapp.todo);
    const dispatch = useDispatch()

    return (
    
        status? Items.map((el)=>
        <div className='blc'>
        <button className='btdel' onClick={()=>dispatch(deltask(el.id))}>X</button>
        <p className={el.isCompleted?"Done":"blcp"}> {el.text}</p>
        <div className='bnt'>
         <Edit key={el.id} item={el}/>
         <button className='bntdo' onClick={()=>dispatch(compettask(el.id))}>
            {el.isCompleted?"Done":"Undone"} </button>
         </div>
         </div>
    
        
    ):Items.map((el)=>(el.isCompleted?
        <div className='blc'>
        <button className='btdel' onClick={()=>dispatch(deltask(el.id))}>X</button>
        <p className={el.isCompleted?"Done":"blcp"}> {el.text}</p>
        <div className='bnt'>
         <Edit key={el.id} item={el}/>
         <button className='bntdo' onClick={()=>dispatch(compettask(el.id))}>
            {el.isCompleted?"Done":"Undone"} </button>
         </div>
         
        
    </div>:null))
    )
    
}

export default ListTask
