import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import './business.css';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Bounce from 'react-reveal/Bounce'; // Importing Zoom effect
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import Slide from 'react-reveal/Slide'; // Importing Zoom effect
import 'animate.css/animate.min.css';
import videodemo from '../../../assets/video.mp4';
import lamp from '../../../assets/Lamp-unscreen.gif'
 
const Business = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <div className="video-wrapper">
          <video playsinline autoPlay muted loop>
            <source src={videodemo} type="video/webm" />
          </video>

          <div className="header">
            <Zoom left duration="2000">
              <h1 className="fw-bold">unleash your full potential</h1>
            </Zoom>
            <Slide bottom duration="2000">
              <Button variant="contained" color="primary" style={{ marginLeft: '17px' }}>
                <Link className="textdecoration" to="/story/upload">
                  {' '}
                  Get Started
                </Link>
              </Button>
            </Slide>
            <Box
            sx={{
              width: 400,
              height: 400,
              textAlign: 'center',
              margin:"auto",
              padding:5
            }}>
            <Fade up duration="2000">
              <Typography variant="h2">“You can create Xperias, invite creators to work alongside, and collaborate with us.”</Typography>
            </Fade>
            </Box>

          </div>
        </div>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} columns={12} className="partner">
          <Grid xs={12} md={4} spacing={2} className="imageidea ">
          
          <Fade bottom>
          <Zoom>
            <img
              className="imageidea animate__animated animate__backInRight animate__delay-2s"
              src={lamp}
              alt="demo"
              style={{marginTop:"-20%"}}
            />
            </Zoom>
          </Fade>
          </Grid>
          <Grid xs={12} md={8} spacing={2}>
          
            <Bounce left duration="2000">
              <Typography variant="h3" className="text-white">
                Partner
              </Typography>
              <Typography className="title">Transforming Ideas Into Experiences </Typography>
              <Typography className="sub-title">
                A Collaborative <strong>Platform</strong> for Authors, Artists & Marketeers{' '}
              </Typography>

            </Bounce>
              <Fade bottom>
              <Box>
                <Button variant="contained" color="secondary">
                  Partner With Us
                </Button>{' '}
              </Box>
              </Fade>
          </Grid>
        </Grid>
      </Box>
       

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} columns={12} className="collab">
          <Grid xs={12} md={8} spacing={2} className="imageidea ">
            <Zoom>
              <Typography variant="h3">Collaborate</Typography>
              <Typography className="title">
                Opportunities to Unleash Your Full Potential{' '}
              </Typography>
              <Typography className="sub-title">
                Join our team of experts and grow exponentially{' '}
              </Typography>
              <Typography className="formats">Artists | Content Writters | Designers </Typography>
              <Box>
                <Button variant="contained" color="secondary">
                  Join Us
                </Button>{' '}
              </Box>
            </Zoom>
          </Grid>
          <Grid xs={12} md={4} spacing={2}>
            <Fade bottom>
              <img
                className="imageidea animate__animated animate__backInRight animate__delay-2s"
                src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/10/Collaborative-Leadership-HERO.jpg"
                alt="demo"
              />
            </Fade>
          </Grid>
        </Grid>
      </Box>
      
       
    </>
  );
};

export default Business;
