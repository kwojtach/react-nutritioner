import React from 'react';

const planTable = (props) => {
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
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>
              <input value={food.weight} type="number" min="1" onChange={food.weight = 100}/>
              <button>X</button>
            </td>
            {food.proximatesValues.map(proximate => {
              return (
                <td key={proximate}>{proximate}</td>
              )
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
};

export default planTable;