import {      Grid, Typography } from '@mui/material';
import React from 'react'
import './Onboarding.css'
import UserChoices from './UserChoices';

const Onboarding = () => {
    return (  <Grid container  className="section1">
    <Grid xs={12} md={12}  className="intro">
      <Typography className='sub-title'>Hey There ! Welcome to Xperia </Typography>
      <Typography className="title">We&#39;re Excited To Have  You</Typography>
      <Typography className="sub-title">Let us help you with a smoother onboading </Typography>
      
    </Grid>
    <Grid xs={12} md={12}  className="intro">
      <Typography className='title1'>What Would you use Xperia For ? </Typography>
      <UserChoices/>
    </Grid>
    
</Grid> );
}
 
export default Onboarding;