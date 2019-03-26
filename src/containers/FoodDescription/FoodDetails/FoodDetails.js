import React from 'react';
import Table from './Table/Table';

import classes from './FoodDetails.scss';

const foodDetails = (props) => {
  return (
    <>
      <Table
        elements={props.details.proximates}
        title={"Proximates"}
        tableClass={classes.FoodDetails}
      />
      <Table
        elements={props.details.minerals}
        title={"Minerals"}
        tableClass={classes.FoodDetails}
      />
    </>
  )
};

export default foodDetails;