import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import  './Edit.css';
import {edittask, deltask} from '../../JS/Actions/Action';
import {  useDispatch } from "react-redux"

function Edit({item}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const [textUp, setTextUp] = useState(item.text)
    const dispatch = useDispatch();
    const handup =()=>{
        if (textUp!==""){
        dispatch(edittask({id: item.id, text: textUp}));
        handleClose();}
        else {dispatch(deltask(item.id))}
    }



    return (
      <>
        <Button className='bnted' onClick={handleShow}>
          Edit 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
         <Modal.Body>
         <input value={textUp} onChange={(e) => setTextUp(e.target.value)} />
         </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={handup}>
              Save 
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Edit
