//Import dependencies
import React, { useState, useSelector, useDispatch } from 'react';
import '../App.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//import components
// import Chart from './Charts'
import IngredientsList from './IngredientsList.jsx'
import ChartContainer from './ChartContainer.jsx';

const RecipeCard = (props) => {
	return (
<<<<<<< HEAD
        <div className ="recipeCard">
			<h1 className ="recipeName">{props.name}</h1>
            <div className='recipeBody'>
                <IngredientsList ingredients={props.ingredients}/>
                <ChartContainer />
            </div>
            <div className='cardButtons'>
                <button className='button'>EDIT</button>
                <button className='button'>DELETE</button>
            </div>
        </div>
=======
		<Card>
		<CardMedia
			component="img"
			alt="green iguana"
			height="140"
			image="https://www.greatschools.org/gk/wp-content/uploads/2016/04/Tables-charts-graphs.jpg"
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				Feta Dressing
			</Typography>
			<IngredientsList />
		</CardContent>
		<CardActions>
			<Button variant='outlined' size="large">Edit</Button>
			<Button variant='outlined' size="large">Delete</Button>
		</CardActions>
	</Card>

      //   <div className ="recipeCard">
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
>>>>>>> dev

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
