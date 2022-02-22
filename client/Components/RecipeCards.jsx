//Import dependencies
import React, { useState } from 'react';
import '../App.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteRecipe, syncRecipes } from '../store/recipes-slice';
import { useDispatch } from 'react-redux';

//import components
// import Chart from './Charts'
import IngredientsList from './IngredientsList.jsx';
import ChartContainer from './ChartContainer.jsx';

const RecipeCard = (props) => {
	const dispatch = useDispatch()

	return (
		<Card sx={{ mb: 2 }}>
			<CardMedia
				component='img'
				alt='green iguana'
				height='140'
				image='https://www.greatschools.org/gk/wp-content/uploads/2016/04/Tables-charts-graphs.jpg'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{props.name}
				</Typography>
				<IngredientsList
					ingredientList={props.ingredientList}
					recipeName={props.name}
				/>
			</CardContent>
			<CardActions>
				<Button variant='outlined' size='large'>
					Edit
				</Button>
				<Button variant='outlined' size='large' onClick={() => dispatch(deleteRecipe(props.id)).then(() => dispatch(syncRecipes()))}>
					Delete
				</Button>
			</CardActions>
		</Card>

		//   <div className ="recipeCard"></div>
		// <h1 >{props.name}</h1>
		//       <div className='recipeBody'>
		//           <IngredientsList ingredients={props.ingredients}/>
		//           <ChartContainer />
		//       </div>
		//       <div className='cardButtons'>
		//           <button className='button'>EDIT</button>
		//           <button className='button'>DELETE</button>
		//       </div>
		//   </div>

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
