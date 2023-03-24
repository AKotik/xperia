import { Grid,  Button,   Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';
import React from 'react';
import './superhome2.css';
 

const SuperHome2 = () => {
  return (
    <>
          <Grid xs={6}>
            <Typography>Fiction</Typography>
            <Button>Get Started</Button>
          </Grid>
          <Grid xs={6}>
          <Typography>Business</Typography>
            <Button>Get Started</Button>
          </Grid>
          </>
  );
};

export default SuperHome2;
