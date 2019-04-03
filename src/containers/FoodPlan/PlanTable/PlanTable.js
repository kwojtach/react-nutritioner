import React from 'react';

const planTable = (props) => {
  console.log(props.summary);
  return (
    <table>
      <thead>
      <tr>
        <th>Food</th>
        <th>Weight [g]</th>
        <th>E [kcal]</th>
        <th>P [g]</th>
        <th>F [g]</th>
        <th>C [g]</th>
      </tr>
      </thead>
      <tbody>
      {props.foodPlan.map(food => {
        return (
          <tr key={food.name}>
            <td>{food.name}</td>
            <td>
              <input
                value={food.weight}
                type="number"
                onChange={(event) => props.calculateFood(food.id, event)}
                min="1"
              />
              <button>X</button>
            </td>
            {food.proximates.map(proximate => {
              return (
                <td key={proximate}>{proximate}</td>
              )
            })}
          </tr>
        )
      })}
        <tr>
          <td>Summary</td>
          <td>{props.summary.weight}</td>
          {props.summary.proximates.map((proximate, index) => {
            return (
              <td key={index}>{proximate}</td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
};

export default planTable;
