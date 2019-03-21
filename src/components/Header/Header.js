import React from 'react';

import Logo from '../Logo/Logo';
import Print from '../Print/Print';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.scss';

const header = () => {
  return (
    <header className={classes.Header}>
      <Logo/>
      <SearchBar/>
      <Print/>
    </header>
  );
};

export default header;