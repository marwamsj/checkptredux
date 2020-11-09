import {ADD_DO, DEL_DO, EDIT_DO, COMPLET_DO } from '../Constants/Constants';

export const addtask = (payload) => {
    return {
      type: ADD_DO,
      payload,
    };
  };

  export const deltask = (payload) => {
    return {
      type: DEL_DO,
      payload,
    };
  };

  export const edittask = (payload) => {
    return {
      type: EDIT_DO,
      payload,
    };
  };

  export const compettask = (payload) => {
    return {
      type: COMPLET_DO,
      payload,
    };
  };