import React, { useState } from 'react';
import { Grid, Box, Typography, FormGroup, FormControlLabel, Button, Alert } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';

import axios from 'axios';
import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';

import img1 from '../../assets/images/backgrounds/login-bg.svg';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      axios({
        method: 'get',
        url: 'https://xperiatest.azurewebsites.net/Accounts',
        data: values,
      }).then((res) => {
        if (res.data.status === 200) {
          setIsLoggedIn(true);
        } else if (res.data.status === 404) {
          setErrorMessage('User is not registered');
        } else {
          setErrorMessage('Invalid credentials');
        }
      });
    },
  });

  return (
    <>
      {isLoggedIn && <Navigate to="/dashboard" />}

      <PageContainer title="Login" description="this is Login page">
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
                      fontWeight="500"
                      sx={{
                        mr: 1,
                      }}
                    >
                      New to Xperia?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        display: 'block',
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography>
                  </Box>
                  <Box>
                    {errorMessage ? (
                      <Alert
                        severity="warning"
                        sx={{ backgroundColor: 'lightpink', color: 'black' }}
                      >
                        {errorMessage}
                      </Alert>
                    ) : (
                      ''
                    )}
                  </Box>
                  <Box
                    sx={{
                      mt: 4,
                    }}
                  >
                    <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
                    <CustomTextField
                      id="email"
                      variant="outlined"
                      onChange={formik.handleChange}
                      fullWidth
                    />
                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                    <CustomTextField
                      id="password"
                      type="password"
                      variant="outlined"
                      onChange={formik.handleChange}
                      fullWidth
                      sx={{
                        mb: 3,
                      }}
                    />
                    <Box
                      sx={{
                        display: {
                          xs: 'block',
                          sm: 'flex',
                          lg: 'flex',
                        },
                        alignItems: 'center',
                      }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={<CustomCheckbox defaultChecked />}
                          label="Remeber this Device"
                          sx={{
                            mb: 2,
                          }}
                        />
                      </FormGroup>
                      <Box
                        sx={{
                          ml: 'auto',
                        }}
                      >
                        <Typography
                          component={Link}
                          to="/auth/reset-password"
                          fontWeight="500"
                          sx={{
                            display: 'block',
                            textDecoration: 'none',
                            mb: '16px',
                            color: 'primary.main',
                          }}
                        >
                          Forgot Password ?
                        </Typography>
                      </Box>
                    </Box>

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
                      Sign In
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

export default Login;
