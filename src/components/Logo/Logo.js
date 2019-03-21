import React from 'react';

import nutritionerLogo from '../../assets/images/logo.png';
import classes from './Logo.scss';

const logo = () => {
  return (
    <img className={classes.Logo} src={nutritionerLogo} alt="nutritioner_logo"/>
  );
};

export default logo;