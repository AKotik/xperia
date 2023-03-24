import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import './home2.css';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
 import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import Slide from 'react-reveal/Slide'; // Importing Zoom effect
import Roll from 'react-reveal/Roll'; // Importing Zoom effect
import LightSpeed from 'react-reveal/LightSpeed'; // Importing Zoom effect
import TabContainer from '../../components/container/TabContainer';
import 'animate.css/animate.min.css';
import videodemo from '../../assets/video.mp4';
 import book from '../../assets/page-turning-book-animation-21-unscreen.gif'

const Home = () => {
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
          </div>
        </div>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} columns={12} className="collab">
          <Grid xs={12} md={8} spacing={2} className="imageidea ">
          <Roll right>
          <Typography variant="h3" style={{ marginLeft: '17px' }}>
            Books & Short Stories
          </Typography>
          <Typography className="title">Author Stories That Go Beyond Words </Typography>
          <Typography className="sub-title">
            Surprise your audience with your story in many formats{' '}
          </Typography>
          <Typography className="formats">
            Paperback | Ebook | Audio | Video | Languages
          </Typography>
          </Roll>
          <Box>
          <LightSpeed right>
            <Button variant="contained" color="primary" style={{ marginLeft: '17px' }}>
              <Link className="textdecoration" to="/story/upload">
                {' '}
                Upload Your Story
              </Link>
            </Button>
            </LightSpeed>
          </Box>
          
          </Grid>
          <Grid xs={12} md={4} spacing={2}>
          <Zoom bottom> 
          <img
            className="imageidea animate__animated animate__backInLeft animate__delay-2s"
            src={book}
            alt="demo"
          />
          </Zoom> 
          </Grid>
        </Grid>
      </Box>
       

       
      <Grid container class=" featured1 " >
        <Grid xs={12} md={12} className="intro">
          <Typography className="title">Featured Stories</Typography>
          <Fade right>
            <Card sx={{ maxWidth: 345 }}>
              <a className="textdecoration" target=" " href="https://landing.digimailsb2b.com/">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image=" https://www.rd.com/wp-content/uploads/2017/09/The-Science-Behind-Why-Howling-Wind-Is-Spooky_273772163_andreiuc88-1.jpg?fit=680,450"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Be Aware The Summers Wind
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sherrie is a beautiful if somewhat delicate young woman. She looks graceful
                      and is around 24 years of age.....
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </a>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Fade>
        </Grid>
      </Grid>
      <Grid container class="featured">
        <Grid xs={12} md={12} className="intro">
          <Typography className="title">Featured Xperias</Typography>

          <TabContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
