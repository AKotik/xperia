import {   Button, Card, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
 

const EmpltyProjectTemplate = () => {
    return (   <Card sx={{height:'70vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Typography>You Do Not Have Any Project Created yet</Typography>
        <Link to="/dashboard/projects/new"><Button>Create Project</Button></Link>
    </Card>
      );
}
 
export default EmpltyProjectTemplate;