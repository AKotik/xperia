import React from 'react';
import {     Box, Typography } from '@mui/material';

 

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  // TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

 

 

const activities = [
  {
    time: 'Signup',
    color: 'success.main',
    text: 'Create or Login to your account',
  },
  {
    time: 'upload',
    color: 'secondary.main',
    text: 'Upload core content or idea',
  },
   
  {
    time: 'Convesion to Xperia',
    color: 'warning.main',
    text: 'work with the artist and professionals to convert your content into a digital experience',
  },
  {
    time: 'Publish',
    color: 'error.main',
    text: 'Share your creative content with the world',
  },
];

const DailyActivities = () => {
   
  return (
     
      <Timeline
        sx={{
          p: 0,
          mb: 0,
          mt: 10,
        }}
      >
        {activities.map((activity) => (
          <TimelineItem key={activity.time}>
            <TimelineOppositeContent
              sx={{
                flex: '1',
                 
              }}
            >
              <Typography variant="subtitle2" fontWeight="700">
                {activity.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
               <Box sx={{width:50,height:50, display:'flex',alignItems:'center',justifyContent:'center', color:'white',backgroundColor: 'black',borderRadius:50}}>1</Box>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="text.secondary" variant="h6">
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    
  );
};

export default DailyActivities;
