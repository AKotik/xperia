import React from 'react';
import { Grid } from '@mui/material';
import {
  WelcomeCard,
  
  Earnings,
  MonthlySales,
  
} from './dashboard1-components';

import PageContainer from '../../components/container/PageContainer';

const UploadIdea = () => (
  // 2

  <PageContainer title="Analytical Dashboard" description="this is Analytical Dashboard">
    <Grid container spacing={0} sx={{backgroundColor:"#f5f5f5"}}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <WelcomeCard />
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} sm={6}>
            <Earnings />
          </Grid>
          <Grid item xs={12} lg={6} sm={6}>
            <MonthlySales />
          </Grid>
        </Grid>
      </Grid>
     
    </Grid>
  </PageContainer>
);
export default UploadIdea;
