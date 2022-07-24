import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <span>&#x2B22;</span>
      <h1>Sextant</h1>
    </header>
  );
};

export default Header;
