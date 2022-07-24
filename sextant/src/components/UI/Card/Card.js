import React from 'react';

// Source: https://mui.com/material-ui/react-card/#outlined-card

import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const CardWrapper = (props) => {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
