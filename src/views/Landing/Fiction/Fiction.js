import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import book from '../../../assets/page-turning-book-animation-21-unscreen.gif';

import TabContainer from '../../../components/container/TabContainer';
import './fiction.css';
// import "../home2.css"

const Fiction = () => {
  return (
    <>
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://businessviewcaribbean.com/wp-content/uploads/2022/04/Leadership-Management-International-Inc.-LMI-lmi-front-slider-1b.jpeg')",
          height: '500px',
          width: '100%',
        }}
      >
        <div className="mask ">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-dark fw-bold mt-5 text-center ">
              <p className="mb-3 heading-color font">
                We invite authors, artists, musicians, marketeers, and other talented individuals to
                collaborate on novels, plays, and other literary works.
              </p>
              <Link
                className="btn btn-outline-dark btn-lg m-2"
                to="/dashboard"
                role="button"
                rel="nofollow"
              >
                {' '}
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="video-wrapper">
        <video playsinline autoPlay muted loop>
          <source src={videodemo} type="video/webm" />
        </video>

        <div className="header">
          <Zoom left duration="2000">
            <h1 className="fw-bold fontlineheight">unleash your full potential</h1>
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
      </div> */}

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mb-5 mb-md-0">
              <img className="img-fluid" src={book} alt="" />
            </div>
            <Slide bottom duration="2000">
              <div className="col-md-6 align-self-center text-center text-md-left">
                <div className="block">
                  <h5 className="font-weight-bold mb-4 font-size-25">Books & Short Stories</h5>
                  <h1 className="font-weight-bold mb-4">Author Stories That Go Beyond Words</h1>
                  <h5 className="font-weight-bold mb-4 font-size-25">
                    Surprise your audience with your story in many formats
                  </h5>
                  <p className="mb-4">Paperback | Ebook | Audio | Video | Languages</p>

                  <Link to="/dashboard/story/upload" className="btn btn-main">
                    Upload Your Story
                  </Link>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      <section className="bg-cyan section">
        <div className="container">
          <div className="row">
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
          </div>
        </div>
      </section>

      <Grid container class="featured">
        <Grid xs={12} md={12} className="intro">
          <Typography variant="h3" className="title text-center mt-4">
            Featured Xperias
          </Typography>

          <TabContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default Fiction;
