import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Divider } from '@mui/material';

const BaseCard = ({ title, backgroundColor, children }) => (
  <Card
    sx={{
      width: '100%',
      p: 0,
      backgroundColor 
    }}
  >
    <CardHeader title={title} />

    <Divider />
    <CardContent>{children}</CardContent>
  </Card>
);

BaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  backgroundColor:PropTypes.string
};

export default BaseCard;
