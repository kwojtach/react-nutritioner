import React from 'react';

import Logo from '../Logo/Logo';
import Print from '../Print/Print';
import SearchBar from '../SearchBar/SearchBar';

const header = () => {
  return (
    <>
      <Logo/>
      <SearchBar/>
      <Print/>
    </>
  );
};

export default header;