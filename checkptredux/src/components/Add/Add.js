import React,{ useState } from 'react';
import {addtask} from '../../JS/Actions/Action';
import {useDispatch} from 'react-redux';
import './add.css'

function Add({HandelAll}) {

    const [task, setTask] = useState("");
    const [status, setStatus] = useState(true)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        if (task !== "") {
        dispatch(addtask({ id: Math.random(), text: task, isCompleted: false }));
        setTask("")} }
    return (
        <div className='form'>
            
              <form className='addit'>
                 <input value={task} onChange={(e) => setTask(e.target.value)} />
                  <button onClick={handleChange}>Add</button>
                    </form>
           
           <div className='select'>
               <button onClick={()=>{setStatus(!status);HandelAll(status)}} className='filter'>
                  {status? "All":"Done"}
                   
               </button>

           </div>
        </div>
    )
}

export default Add
