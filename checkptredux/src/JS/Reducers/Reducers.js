import {ADD_DO , DEL_DO, EDIT_DO, COMPLET_DO }  from '../Constants/Constants'

const InitialState = {
    todo: [],
  };

export const todoapp = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_DO: 
       return { ...state, todo: [...state.todo, action.payload] };
    
     case DEL_DO: 
       return { ...state, todo: state.todo.filter(el=>el.id!==action.payload) };

     case EDIT_DO: 
       return { ...state, todo: state.todo.map(el=>el.id===action.payload.id? {...el, text:action.payload.text}:el) };
  
     case COMPLET_DO: 
       return { ...state, todo: state.todo.map(el=>el.id==action.payload? {...el, isCompleted: !el.isCompleted}:el) };
       
  default:
     return state;
  }
  
  
};
