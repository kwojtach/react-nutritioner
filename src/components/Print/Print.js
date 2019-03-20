import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const print = () => {
  return (
    <a href="#">
      <FontAwesomeIcon icon={faPrint} />
    </a>
  );
};

export default print;