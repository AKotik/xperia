import { Box, Button, Grid, Typography, Avatar, Menu, Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HeadRoom from 'react-headroom';
import './Header.css';

import FeatherIcon from 'feather-icons-react';
import logo from '../../../assets/xperialogo.png';
import userimg from '../../../assets/images/users/user2.jpg';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <HeadRoom>
      <Box className="headerpadding">
        <Link to="/super_home">
          {' '}
          <img src={logo} alt="logo" style={{ height: '70px', width: '70px' }} />
        </Link>
        <Grid style={{ marginTop: '15px' }}>
          <Link className="textdecoration " to="/advpage">
            <Button variant="contained" color="primary">
              Experience Xperia
            </Button>
          </Link>
          {true ? (
            <Link className="textdecoration" to="/signin">
              <Button variant="outlined" style={{ marginLeft: '17px' }} color="primary">
                Login{' '}
              </Button>
            </Link>
          ) : (
            <>
              <Button
                aria-label="menu"
                color="inherit"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleClick4}
              >
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={userimg}
                    alt={userimg}
                    sx={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <Box
                    sx={{
                      display: {
                        xs: 'none',
                        sm: 'flex',
                      },
                      alignItems: 'center',
                    }}
                  >
                    <Typography color="textSecondary" variant="h5" fontWeight="400" sx={{ ml: 1 }}>
                      Hi,
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="700"
                      sx={{
                        ml: 1,
                      }}
                    >
                      User
                    </Typography>
                    <FeatherIcon icon="chevron-down" width="20" height="20" />
                  </Box>
                </Box>
              </Button>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl4}
                keepMounted
                open={Boolean(anchorEl4)}
                onClose={handleClose4}
                sx={{
                  '& .MuiMenu-paper': {
                    width: '385px',
                    right: 0,
                    top: '70px !important',
                  },
                  '& .MuiList-padding': {
                    p: '30px',
                  },
                }}
              >
                <ProfileDropdown user="" />
                <Link
                  style={{
                    textDecoration: 'none',
                  }}
                  to="/auth/login"
                >
                  <Button
                    sx={{
                      mt: 2,
                      display: 'block',
                      width: '100%',
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Logout
                  </Button>
                </Link>
              </Menu>
            </>
          )}
        </Grid>
      </Box>
      <Divider light />
    </HeadRoom>
  );
};

export default Header;
