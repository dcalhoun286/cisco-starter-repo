// Source for skeleton of this component: https://mui.com/material-ui/react-card/#outlined-card
// Source for dynamically changing dimensions of this component - haven't used yet, but might use later: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import React from 'react';
// import classes from './Card.module.css';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const CardWrapper = (props) => {
  return (
    <Card
      sx={{
        width: 0.8,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
