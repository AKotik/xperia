import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
 


const MyStories = () => {

   const [stories,setStories] = useState([])

    useEffect(() => {
        axios({
            method : 'get',
            url:"http://localhost:3000/api/v1/stories",
            data: null
           }).then(res =>{
            console.log(res.data)
           setStories(res.data)
           })
      });

    return (  <Grid container spacing={0}>
        {stories.map((story) => (
          <Grid item xs={12} lg={4} sm={4} display="flex" alignItems="stretch" key={story.id}>
            <Card sx={{ p: 0, width: '100%' }}>
              {/* <img src={story.photo} alt="img" width="100%" /> */}
              <CardContent sx={{ p: 3 }}>
               
                <Typography
                  component={Link}
                  to="/theme/shop/shop-detail"
                  fontWeight="500"
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    color: (theme) =>
                      `${
                        theme.palette.mode === 'dark'
                          ? theme.palette.grey.A200
                          : 'rgba(0, 0, 0, 0.87)'
                      }`,
                  }}
                >
                  {story.title}
                </Typography>
                <Typography variant="caption">{story.sub_title}</Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    mt: '15px',
                  }}
                >
                  <Typography variant="h5" sx={{ mr: 'auto' }}>
                    {story.price}
                  </Typography>
                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
     );
}
 
export default MyStories;