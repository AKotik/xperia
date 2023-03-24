 
import React from 'react'
import {
    Box,
    Grid,
    Typography,
   
    Link,
     
    Button,
    
    Divider,
  } from '@mui/material';
  import FeatherIcon from 'feather-icons-react';

const StoryDetails = () => {
    return (   <Box>
        {/* stock text */}
        <Box display="flex" alignItems="center">
           
          <Typography color="textSecondary" variant="caption" fontWeight="400">
            Men Shoes
          </Typography>
        </Box>
        {/* title */}
        <Typography
          fontWeight="600"
          sx={{
            fontSize: {
              xs: '24px',
              sm: '30px',
              lg: '30px',
            },
            mt: '5px',
          }}
        >
          Nike branding shoes
        </Typography>
        <Typography
          variant="body1"
          fontWeight="400"
          sx={{
            mt: '10px',
            color: (theme) => theme.palette.grey.A200,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu, tincidunt bibendum
          felis.
        </Typography>
  
        <Typography
          fontWeight="600"
          sx={{
            fontSize: {
              xs: '24px',
              sm: '30px',
              lg: '30px',
            },
            mt: '20px',
          }}
        >
          $546.00
        </Typography>
        
        
        <Divider />
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2,
          }}
        >
          <Grid item xs={12} sm={6} lg={6}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                pt: '13px',
                pb: '13px',
                display: 'block',
                width: '100%',
                borderRadius: '9px',
              }}
            >
              Buy Now
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              display="flex"
              alignitems="center"
              justifycontent="center"
              sx={{
                pt: '13px',
                pb: '13px',
                width: '100%',
                borderRadius: '9px',
              }}
            >
              <FeatherIcon icon="shopping-cart" width="20" display="flex" alignitems="center" />
              <Box
                component="span"
                sx={{
                  ml: 1,
                }}
              >
                Add to Cart
              </Box>
            </Button>
          </Grid>
        </Grid>
        {/* subtext */}
        <Box
          sx={{
            mt: 5,
          }}
        >
          <Typography color="textSecondary" variant="body1" fontWeight="400">
            Dispatched in 2-3 weeks
          </Typography>
          <Link href="/" underline="always" color="inherit">
            Why the longer time for delivery?
          </Link>
        </Box>
      </Box>  );
}
 
export default StoryDetails;