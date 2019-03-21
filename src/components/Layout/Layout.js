import React, { useEffect } from 'react';

import classes from './Layout.scss';

const layout = (props) => {
  useEffect(() => {
    document.documentElement.classList.add(classes.Html);
    document.body.classList.add(classes.Body);
  }, []);

  return (
    <div className={[classes.Layout, 'Global'].join(' ')}>{props.children}</div>
  );
};

export default layout;