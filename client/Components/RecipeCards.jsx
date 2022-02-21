//Import dependencies
import React, { useState, useSelector, useDispatch } from 'react';
import '../App.scss';

//import components
// import Chart from './Charts'
import IngredientsList from './IngredientsList.jsx'
import ChartContainer from './ChartContainer.jsx';

const RecipeCard = (props) => {
	return (
        <div className ="recipeCard">
			<h1 >{props.name}</h1>
            <div className='recipeBody'>
                <IngredientsList ingredients={props.ingredients}/>
                <ChartContainer />
            </div>
            <div className='cardButtons'>
                <button className='button'>EDIT</button>
                <button className='button'>DELETE</button>
            </div>
        </div>

		// <List/>
		// <Chart/>
		//name of recipe
		//edit and delete buttons
		//STRETCH
		//Like,start,favorite button of some sort
		//share recipe button for socials
	);
};

export default RecipeCard;
