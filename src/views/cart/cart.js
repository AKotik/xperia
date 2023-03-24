import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  FormLabel,
  Grid,
   
  MenuItem,
 
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CustomSelect from '../../components/forms/custom-elements/CustomSelect';

const Dashboard = () => {
  //   Qty
  const [qty, setQty] = React.useState('10');
 

  const handleChange3 = (event3) => {
    setQty(event3.target.value);
  };
  
  
  return (<>
    <Typography variant="h1" style={{textAlign: 'center'}}>Cart</Typography>
    <Grid container spacing={1}>
    
      <Grid item xs={12} md={8} lg={8}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Product Name
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                $49.99
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <CustomSelect
                  labelId="qty-label"
                  id="qty-select-outlined"
                  value={qty}
                  onChange={handleChange3}
                  fullWidth
                  size="small"
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                </CustomSelect>
              </FormControl>
            </CardContent>
          </Box>
        </Card>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Product Name
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                $49.99
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <CustomSelect
                  labelId="qty-label"
                  id="qty-select-outlined"
                  value={qty}
                  onChange={handleChange3}
                  fullWidth
                  size="small"
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                </CustomSelect>
              </FormControl>
            </CardContent>
          </Box>
        </Card>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Product Name
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                $49.99
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <CustomSelect
                  labelId="qty-label"
                  id="qty-select-outlined"
                  value={qty}
                  onChange={handleChange3}
                  fullWidth
                  size="small"
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                </CustomSelect>
              </FormControl>
            </CardContent>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <Card>
          <Typography mt={2} ml={2}>
            Total : $1000
          </Typography>
          <Divider />
          <CardContent>
            <FormControl fullWidth multiline maxRows={4}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                id="outlined-password-input"
                label="Additional Comments"
                type="text"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControl fullWidth  >
              <TextField
                fullWidth
                margin="normal" 
                id="outlined-voicher-input"
                label="voucher"
                type="text"
                autoComplete="voucher"
              />
            </FormControl>
            <Button variant="outlined" fullWidth  >Apply voucher</Button>
            <Divider style={{marginTop: "10px", width: "100%"}}/>

            <FormLabel variant="">Shipping Estimate</FormLabel>
            <FormControl  fullWidth mt={2}  margin="normal" >
            <CustomSelect
            
              id="demo-simple-select-outlined"
              value={qty}
              onChange={handleChange3}
              fullWidth
              label="city"
              
            >
              <MenuItem value={10}>us</MenuItem>
              <MenuItem value={20}>canada</MenuItem>
              <MenuItem value={30}>demo</MenuItem>
              <MenuItem value={40}>ds</MenuItem>
              <MenuItem value={50}>dc</MenuItem>
            </CustomSelect>
          </FormControl>
            <FormControl variant="outlined" fullWidth mt={2}  margin="normal" >
            <CustomSelect
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={qty}
              label="state"
              onChange={handleChange3}
              fullWidth
              
            >
              <MenuItem value={10}>us</MenuItem>
              <MenuItem value={20}>canada</MenuItem>
              <MenuItem value={30}>demo</MenuItem>
              <MenuItem value={40}>ds</MenuItem>
              <MenuItem value={50}>dc</MenuItem>
            </CustomSelect>
          </FormControl>
          <FormControl fullWidth  >
              <TextField
                fullWidth
                margin="normal" 
                id="outlined-voicher-input"
                label="ZipCode"
                type="text"
                autoComplete="Zipcode"
              />
            </FormControl>
            <Button component={Link}
            to="/app/checkout" variant="outlined" fullWidth  >CheckOut Now</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};

export default Dashboard;
