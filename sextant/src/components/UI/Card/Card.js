// Source for skeleton of this component: https://mui.com/material-ui/react-card/#outlined-card
// Source for dynamically changing dimensions of this component - haven't used yet, but might use later: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import React from 'react';
import classes from './Card.module.css';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import { Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const CardWrapper = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default CardWrapper;
