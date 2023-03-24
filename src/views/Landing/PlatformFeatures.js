import React from 'react';
import { Grid, Card, CardContent,  Typography } from '@mui/material';
import FeatherIcon from 'feather-icons-react';
 


const PlatformFeatures = () => {
  return (
    <Card
      elevation={0}
      sx={{
        position: 'relative',
        backgroundColor: (theme) => `${theme.palette.mode === 'dark' ? '#32363e' : 'black'}`,
        '&:before': {
          content: `""`,
          color:"white",
          position: 'absolute',
          width: '100%',
          height: '100%',
          padding:'10%',
        //   background: `url(${imgsvg})`,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: '45%',
          transform: (theme) => `${theme.direction === 'rtl' ? '' : 'unset'}`,
          backgroundPosition: {
            xs: 'top 0px right -9px',
          },
        },
        borderWidth: '0px',
      }}
    >
      <CardContent>
      <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  textAlign:"center"
                }}
              >
                Platform Features
              </Typography>
        <Grid container spacing={4} sx={{padding:'5%'}}>
          
          <Grid item xs={12} md={4} sx={{ textAlign:"center"}}>
          <Typography
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                  fontSize:"30px"
                }}
              >
                <FeatherIcon icon="message-square" width="100"  />
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                
                sx={{
                  lineHeight: '1.2',
                  color:'white',
                  padding:"10px 0"
                }}
              >
               Live Chat
              </Typography>
              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  lineHeight: '1.3',
                }}
              >
               In publishing and graphic design,    demonstrate the visual form of a document or a typeface without
              </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ textAlign:"center"}}>
          <Typography
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                  fontSize:"30px"
                }}
              >
                <FeatherIcon icon="message-square" width="100"  />
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                
                sx={{
                  lineHeight: '1.2',
                  color:'white',
                  padding:"10px 0"
                }}
              >
               Live Chat
              </Typography>
              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  lineHeight: '1.3',
                }}
              >
               In publishing and graphic design,    demonstrate the visual form of a document or a typeface without
              </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ textAlign:"center"}}>
          <Typography
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                  fontSize:"30px"
                }}
              >
                <FeatherIcon icon="message-square" width="100"  />
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                
                sx={{
                  lineHeight: '1.2',
                  color:'white',
                  padding:"10px 0"
                }}
              >
               Live Chat
              </Typography>
              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  lineHeight: '1.3',
                }}
              >
               In publishing and graphic design,    demonstrate the visual form of a document or a typeface without
              </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ textAlign:"center"}}>
          <Typography
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                  fontSize:"30px"
                }}
              >
                <FeatherIcon icon="message-square" width="100"  />
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                
                sx={{
                  lineHeight: '1.2',
                  color:'white',
                  padding:"10px 0"
                }}
              >
               Live Chat
              </Typography>
              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  lineHeight: '1.3',
                }}
              >
               In publishing and graphic design,    demonstrate the visual form of a document or a typeface without
              </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ textAlign:"center"}}>
          <Typography
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                  fontSize:"30px"
                }}
              >
                <FeatherIcon icon="message-square" width="100"  />
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                
                sx={{
                  lineHeight: '1.2',
                  color:'white',
                  padding:"10px 0"
                }}
              >
               Live Chat
              </Typography>
              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  lineHeight: '1.3',
                }}
              >
               In publishing and graphic design,    demonstrate the visual form of a document or a typeface without
              </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ textAlign:"center"}}>
          <Typography
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                  fontSize:"30px"
                }}
              >
                <FeatherIcon icon="message-square" width="100"  />
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                
                sx={{
                  lineHeight: '1.2',
                  color:'white',
                  padding:"10px 0"
                }}
              >
               Live Chat
              </Typography>
              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  lineHeight: '1.3',
                }}
              >
               In publishing and graphic design,    demonstrate the visual form of a document or a typeface without
              </Typography>
          </Grid>
          
        </Grid>
        
      </CardContent>
    </Card>
  );
};

export default PlatformFeatures;
