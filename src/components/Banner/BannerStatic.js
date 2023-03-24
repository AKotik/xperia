import React from "react";
import {
   
  Card,
  CardMedia,
  Typography,
  Grid,
  
} from '@mui/material';
 import './styles.css'

 const BannerStatic = () => {

  const item =  {
    Name: "Macbook Pro",
    Image: "https://source.unsplash.com/featured/?macbook"
  }
  return ( 
    <Card raised className="Banner">
    <Grid container spacing={10} className="BannerGrid">
    <Grid item xs={12} key="content">
      <Grid className="content">
      <Typography className="MediaCaption">{item.Name}</Typography>
      </Grid>
    <CardMedia className="Media" image={item.Image}  >
      <Typography className="MediaCaption">{item.Name}</Typography>
    </CardMedia>
  </Grid>
    </Grid>
  </Card>
  
   );
 }
  
 export default BannerStatic;