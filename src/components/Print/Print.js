import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import classes from './Print.scss';

const print = () => {
  return (
    <a className={classes.Print} href="#">
      <FontAwesomeIcon icon={faPrint} />
    </a>
  );
};

export default print;