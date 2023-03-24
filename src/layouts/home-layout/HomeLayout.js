import React from "react";
import { Outlet } from "react-router";
import { useSelector } from 'react-redux';
import { experimentalStyled, Container, Box } from '@mui/material';
import { TopbarHeight } from '../../assets/global/Theme-variable';
import Header from './header/Header';
 
 


const MainWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  width: '100%',
}));

const PageWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('lg')]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down('lg')]: {
    paddingTop: '64px',
  },
}));


 const HomeLayout = () => {

  const customizer = useSelector((state) => state.CustomizerReducer);
   

  return (  
    <MainWrapper className={customizer.activeMode === 'dark' ? 'darkbg' : ''}>
      <Header
      sx={{
       
        backgroundColor: customizer.activeMode === 'dark' ? '#20232a' : '#ffffff',
        boxShadow:'0px 7px 30px 0px rgb(90 114 123 / 11%)'
      }}
      />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            
             
          }}
        >
          
          <Box>
          <Outlet />
          </Box>
          
        </Container>
    </PageWrapper>
  </MainWrapper> );
 }
  
 export default HomeLayout;
