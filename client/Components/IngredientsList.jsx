//Import dependencies
import React from 'react';
import "../App.scss"

//Import Components
const IngredientsList = (props) => {
  const name = [];
  props.ingredients.forEach((el) => name.push(<li className='ingredient' >{el.serving_qty} {el.food_name}</li>))

  return (
    <div className = 'ingredientContainer'>
    <h4>Ingredients</h4>
      <ul className= 'ingredientList'>
      {name}
    </ul>
    </div>
  )
}

export default IngredientsList;
