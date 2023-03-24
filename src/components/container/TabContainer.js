import React from 'react';
import PropTypes from 'prop-types';
import { Box,Tabs, Tab } from '@mui/material';
 
import ProductListing from '../shop/ProductListing';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };



  const TabContainer = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
       
        
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="primary"
                allowScrollButtonsMobile
                scrollButtons
                indicatorColor="primary"
                centered
              >
                <Tab
                  sx={{
                    fontFamily : "Poppins",
                    fontSize : '20px',
                    fontWeight:400,
                    textTransform: 'capitalize',
                  }}
                  label="Books"
               
                />
                <Tab
                  sx={{
                    fontFamily : "Poppins",
                    fontSize : '20px',
                    fontWeight:400,
                    textTransform: 'capitalize',
                  }}
                  label="Stories"
                 
                />
                <Tab
                  sx={{
                    fontFamily : "Poppins",
                    fontSize : '20px',
                    fontWeight:400,
                    textTransform: 'capitalize',
                  }}
                  label="Videos"
                
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} component="div">
               <ProductListing/> 
            </TabPanel>
            <TabPanel value={value} index={1}>
               <ProductListing/> 
            </TabPanel>
            <TabPanel value={value} index={2}>
               <ProductListing/> 
            </TabPanel>
          </Box>
      
       
    );
  };

  export default TabContainer;
  