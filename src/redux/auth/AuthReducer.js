import {  SIGN_IN_SUCCESS } from '../constants';

const INIT_STATE =  {
    user:0
}


const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
          return {
            ...state,
            user: action.user
          };
        

        default:
            return state;
    }
    
}

export default authReducer;