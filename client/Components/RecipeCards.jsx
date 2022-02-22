//Import dependencies
import React, { useState } from 'react';
import '../App.scss';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteRecipe, syncRecipes } from '../store/recipes-slice';
import { useDispatch } from 'react-redux';

// import canvas from 'canvas';


//import components
import IngredientsList from './IngredientsList.jsx';
import ChartContainer from './ChartContainer.jsx';
import DoughnutChart from './ChartJS/PieChart.jsx';

const RecipeCard = (props) => {
	const dispatch = useDispatch()
	console.log('Here\'s the ingredient list: ', props.ingredientList)

	return (
		<Card sx={{ mb: 2 }}>
			{/* <CardMedia
				component='img'
				alt='green iguana'
				height='140'
				image='https://www.greatschools.org/gk/wp-content/uploads/2016/04/Tables-charts-graphs.jpg'
			/> */}
				<Typography gutterBottom variant='h4' component='div' align='center'>
					{props.name}
				</Typography>
			<ChartContainer ingredientList={props.ingredientList}/>

			<CardContent>

				<IngredientsList
					ingredientList={props.ingredientList}
					recipeName={props.name}
				/>
			</CardContent>
			<CardActions>
				<Box sx={{width: '100%', display: 'flex'}}>
					<Box sx={{ flexGrow: 1 }}>
					<Button variant='outlined' size='large' >
					Edit
				</Button>
						</Box>
					<Box sx={{ flexGrow: 1 }}>
					<Button variant='outlined' size='large' onClick={() => dispatch(deleteRecipe(props.id)).then(() => dispatch(syncRecipes()))}>
					Delete
				</Button>
						</Box>


				</Box>
			</CardActions>
		</Card>
	);
};

export default RecipeCard;
