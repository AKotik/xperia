import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateLogin } from '../../redux/auth/Action';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';

import img1 from '../../assets/images/backgrounds/login-bg.svg';

const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const config = {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'content-type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
    },
  };

  // const {
  //   data: { ip }
  // } = await axios.get("https://api.ipify.org?format=json", config);
  const formik = useFormik({
    initialValues: {
      userId: '1',
      firstName: '',
      middleName: '',
      lastName: '',
      userName: '',
      password: '',
    },
    onSubmit: (values) => {
      axios({
        method: 'post',
        url: 'https://xperiatest.azurewebsites.net/Accounts',
        data: values,
        headers: config,
      })
        .then((res) => {
          console.log(res.data);
          dispatch(updateLogin(res.data.user));
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      {isLoggedIn && <Navigate to="/home" />}
      <PageContainer title="Register" description="this is Register page">
        <Grid container spacing={0} sx={{ height: '100vh', justifyContent: 'center' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            sx={{
              // background: (theme) => `${theme.palette.mode === 'dark' ? '#1c1f25' : '#ffffff'}`,
              background: '#1b1b1b',
            }}
          >
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: {
                    xs: 'relative',
                    lg: 'absolute',
                  },
                  height: { xs: 'auto', lg: '100vh' },
                  right: { xs: 'auto', lg: '-50px' },
                  margin: '0 auto',
                }}
              >
                <img
                  src={img1}
                  alt="bg"
                  style={{
                    width: '100%',
                    maxWidth: '812px',
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sx={{ backgroundColor: '#1b1b1b' }}
            xs={12}
            sm={8}
            lg={6}
            display="flex"
            alignItems="center"
          >
            <Grid container spacing={0} display="flex" justifyContent="center">
              <Grid item xs={12} lg={9} xl={6}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: '#f5f5f5',
                    margin: '20px 10px',
                  }}
                >
                  <Typography fontWeight="700" variant="h2">
                    Welcome to Xperia
                  </Typography>

                  <Box display="flex" alignItems="center">
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="400"
                      sx={{
                        mr: 1,
                      }}
                    >
                      Already have an Account?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/login"
                      fontWeight="500"
                      sx={{
                        display: 'block',
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Sign In
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      mt: 4,
                    }}
                  >
                    <CustomFormLabel htmlFor="name">First Name</CustomFormLabel>
                    <CustomTextField
                      id="firstName"
                      variant="outlined"
                      onChange={formik.handleChange}
                      fullWidth
                    />
                    <CustomFormLabel htmlFor="name">Middle Name</CustomFormLabel>
                    <CustomTextField
                      id="middleName"
                      variant="outlined"
                      onChange={formik.handleChange}
                      fullWidth
                    />
                    <CustomFormLabel htmlFor="name">Last Name</CustomFormLabel>
                    <CustomTextField
                      id="lastName"
                      variant="outlined"
                      onChange={formik.handleChange}
                      fullWidth
                    />
                    <CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
                    <CustomTextField
                      id="userName"
                      variant="outlined"
                      onChange={formik.handleChange}
                      fullWidth
                    />
                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                    <CustomTextField
                      id="password"
                      variant="outlined"
                      type="password"
                      onChange={formik.handleChange}
                      fullWidth
                      sx={{
                        mb: 3,
                      }}
                    />

                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      fullWidth
                      onClick={formik.handleSubmit}
                      sx={{
                        pt: '10px',
                        pb: '10px',
                      }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Register;
