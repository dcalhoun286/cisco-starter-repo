import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Sextant</h1>
      <p>_________________________________________________________</p>
      <p>NETWORK DIAGNOSTICS</p>
    </header>
  );
};

export default Header;
