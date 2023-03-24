import {  SIGN_IN_SUCCESS } from '../constants';

export const updateLogin = (user) => ({
    type: SIGN_IN_SUCCESS,
    user
  });

export const logout = ( ) => ({
    type: 'LOGOUT_SUCCESS',
     
  });

 
  

