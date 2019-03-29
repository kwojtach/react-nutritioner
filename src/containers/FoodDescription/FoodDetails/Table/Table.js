import React from 'react';

const table = (props) => {
  return (
    <table className={props.tableClass}>
      <thead>
        <tr>
          <th>{props.title}</th>
          <th>Value per 100g</th>
        </tr>
      </thead>
      <tbody>
      { props.elements.map(element =>
        <tr key={element.nutrient_id}>
          <td>{element.name} ({element.name.slice(0,1)})</td>
          <td>{element.value} {element.unit}</td>
        </tr>) }
      </tbody>
    </table>
  )
};

export default table;