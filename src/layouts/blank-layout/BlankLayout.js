import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../app-layout/footer/Footer';
import Header from './Header/Header';

const BlankLayout = () => (
  <>
  <Header/>
    <Outlet />
  <Footer/>
  </>
);

export default BlankLayout;
