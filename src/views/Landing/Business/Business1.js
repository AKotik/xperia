import {
     
  Button,  
  
} from '@mui/material';
import React from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import lamp from '../../../assets/Lamp-unscreen.gif';
import videodemo from '../../../assets/video.mp4';
 
import '../Fiction/fiction.css';
// import "../home2.css"

const Business1 = () => {
  return (
    <>
      <div className="video-wrapper">
        <video playsinline autoPlay muted loop>
          <source src={videodemo} type="video/webm" />
        </video>

        <div className="header">
          <Zoom left duration="2000">
            <h1 className="fw-bold fontlineheight">unleash your full potential</h1>
          </Zoom>
          <center>
            <h5 className="font-weight-bold mb-4 font-size-25 maxwidth ">
              “You can create Xperias, invite creators to work alongside, and collaborate with us.”
            </h5>
          </center>
          <Slide bottom duration="2000">
            <Button variant="contained" color="primary" style={{ marginLeft: '17px' }}>
              <Link className="textdecoration" to="/dashboard/story/upload">
                {' '}
                Get Started
              </Link>
            </Button>
          </Slide>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mb-5 mb-md-0">
              <img className="img-fluid" src={lamp} alt="" />
            </div>
            <Slide bottom duration="2000">
              <div className="col-md-6 align-self-center text-center text-md-left">
                <div className="block">
                  <h5 className="font-weight-bold mb-4 font-size-25">Partner</h5>
                  <h1 className="font-weight-bold mb-4 font-size-60">
                    Transforming Ideas Into Experiences
                  </h1>
                  <h5 className="font-weight-bold mb-4 font-size-25">
                    A Collaborative Platform for Authors, Artists & Marketeers
                  </h5>
                  {/* <p className="mb-4">Paperback | Ebook | Audio | Video | Languages</p> */}

                  <Link to="/dashboard/story/upload" className="btn btn-main">
                    Partner With Us
                  </Link>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="block">
                <h5 className="font-weight-bold mb-4 font-size-25">Collaborate</h5>
                <h1 className="font-weight-bold mb-4 font-size-60">
                  Opportunities to Unleash Your Full Potential
                </h1>
                <h5 className="font-weight-bold mb-4 font-size-25">
                  Join our team of experts and grow exponentially
                </h5>
                <h5 className="font-weight-bold mb-4 font-size-25">
                  Artists | Content Writters | Designers
                </h5>
                <br />
                <br />

                {/* <p className="mb-4">Paperback | Ebook | Audio | Video | Languages</p> */}

                <Link to="/collaborate" className="btn btn-main">
                  Collaborate With Us
                </Link>
              </div>
            </div>
            <Slide bottom duration="2000">
              <div className="col-md-6 text-center mb-5 mb-md-0">
                <img
                  className="img-fluid"
                  src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/10/Collaborative-Leadership-HERO.jpg"
                  alt=""
                />
              </div>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business1;
