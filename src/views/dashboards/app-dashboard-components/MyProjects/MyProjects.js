import React from 'react'
import { Outlet } from 'react-router';
import EmpltyProjectTemplate from './EmptyProjectTemplate';


const MyProjects = () => {
  
    return ( <>
    
    <EmpltyProjectTemplate/>
    <Outlet/>
    </> );
}
 
export default MyProjects;