import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Button } from '@mui/material';
import {Link} from 'react-router-dom'
 
const UserChoices = () => {
  
  return (
    <Grid   sx={{ padding:'0 5%',display:'flex',alignItems:'space-around',flexDirection:{md:'row',xs:'column'}}}>  
    <Card
      sx={{
        width:{md:'40%',xs:'80%'},
        pb: 0,
        pl: 0,
        pr: 0,
      }}
    >
      <CardContent
        sx={{
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <Box>
            <Typography
              variant="h4"
              color="textSecondary"
              sx={{
                marginBottom: '0',
              }}
              gutterBottom
            >
              Publishing
            </Typography>
            <Typography
              variant=""
              sx={{
                mt: '1px',
                mb: '0px',
              }}
              gutterBottom
            >
             I want my core idea to be 
             refined and published on xperia
            </Typography>
          
            <Button  variant="contained" color="primary"><Link to="/story/upload">Upload My Story</Link></Button>
          </Box>
        
          
        </Box>
      </CardContent>
     
    </Card>
    
     
    <Card
      sx={{
        width:{md:'40%',xs:'80%'},
        pb: 0,
        pl: 0,
        pr: 0,
      }}
    >
      <CardContent
        sx={{
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <Box>
            <Typography
              variant="h4"
              color="textSecondary"
              sx={{
                marginBottom: '0',
              }}
              gutterBottom
            >
              Publishing
            </Typography>
            <Typography
              variant=""
              sx={{
                mt: '1px',
                mb: '0px',
              }}
              gutterBottom
            >
             I want my core idea to be 
             refined and published on xperia
            </Typography>
            <Button  variant="contained" color="primary"><Link to="/artist/profile/create">Create My Profile</Link></Button>
          </Box>

          
        </Box>
      </CardContent>
     
    </Card>
     
       
    <Card
      sx={{
        width:{md:'40%',xs:'80%'},
        pb: 0,
        pl: 0,
        pr: 0,
      }}
    >
      <CardContent
        sx={{
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        <Box display="flex" alignItems="flex-start">
          <Box>
            <Typography
              variant="h4"
              color="textSecondary"
              sx={{
                marginBottom: '0',
              }}
              gutterBottom
            >
              Publishing
            </Typography>
            <Typography
              variant=""
              sx={{
                mt: '1px',
                mb: '0px',
              }}
              gutterBottom
            >
             I want my core idea to be 
             refined and published on xperia
            </Typography>
            <Button  variant="contained" color="primary">Submit A Request</Button>
          </Box>  
        </Box>
      </CardContent>
     
    </Card>
     
    </Grid>
  );
};

export default UserChoices;
