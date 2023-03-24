import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'
import TabContainer from '../../components/container/TabContainer';

 
import './home.css'
  
const Home2 = () => {
    
    return (  
      <>
      {/* ----------- Hero ----------------- */}
      
      <Grid container  class="container hero">
      
          <Grid xs={12} md={8}  className="intro">
            <Typography className="text-white">Partner</Typography>
            <Typography className="title">Transforming Ideas Into Experiences </Typography>
            <Typography className="sub-title">A Collaborative <strong>Platform</strong> for Authors, Artists & Marketeers </Typography>
            <Box>
         <Link className="textdecoration"  to="/onboard"  ><Button variant="contained" color="primary"> Get Started - <strong>It&#39;s</strong>  Free </Button></Link>
         </Box>
            
          </Grid>
        
           
      </Grid>

      {/* --------------- Publish --------------- */}
      <Grid container class="container publish">
          <Grid xs={12} md={8}  className="intro">
            <Typography>Books & Short Stories</Typography>
            <Typography className="title">Author Stories That Go Beyond Words </Typography>
            <Typography className="sub-title">Surprise your audience with  your story in many formats </Typography>
            <Typography className="formats">Paperback | Ebook | Audio | Video | Languages</Typography>
            <Box><Button variant="contained" color="primary">
              <Link to="/story/upload"> Upload Your Story</Link>
        
        </Button> </Box>
          </Grid>
      </Grid>


      {/* --------------- Collaborate --------------- */}
      <Grid container class="container collab">
          <Grid xs={12} md={8}  className="intro">
            <Typography>Collaborate</Typography>
            <Typography className="title">Collaborate Opportunities to Unleash Your Full Potential </Typography>
            <Typography className="sub-title">Join our team of experts and grow exponentially  </Typography>
            <Typography className="formats">Artists | Content Writters  | Designers </Typography>
            <Box><Button variant="contained" color="secondary">
        Join Us
        </Button> </Box>
         
          </Grid>
      </Grid>


      {/* ------------------ fetured tab panel --------------- */}
      <Grid container class="container featured ">
      <Grid xs={12} md={12}  className="intro">
      <Typography className="title">Featured Xperias</Typography>
        <TabContainer/>
      </Grid>
      
      </Grid>
      </>
     );
}
 
export default Home2;