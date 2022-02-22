//Import dependencies
import { FormControl, InputLabel, Input, TextField, FormHelperText, FormLabel,} from '@mui/material'
import React, { useState } from 'react';
import '../App.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { editRecipe, deleteRecipe, syncRecipes } from '../store/recipes-slice';
import { useDispatch } from 'react-redux';

//import components
// import Chart from './Charts'
import IngredientsList from './IngredientsList.jsx';
import ChartContainer from './ChartContainer.jsx';

const RecipeCard = (props) => {
	const dispatch = useDispatch()
	const [isEditing, setIsEditing] = useState(false);
	const [editQuery, setQuery] = useState(props.query);
	const [editRecipeName, setEditRecipeName] = useState(props.name);

	const editBody = {
		id: props.id,
		name: editRecipeName,
		query: editQuery
	};

	const editRecipeNameHandler = (name) => {
		setEditRecipeName(name)
	}
	const editQueryHandler = (query) => {
		setQuery(query)
	}

	const editBtnHandler = () => {
		setIsEditing(true)
	};

	const submitBtnHandler = () => {
		setIsEditing(false)
	}

	const renderCard = <Card sx={{ mb: 2 }}>
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
				<Button variant='outlined' size='large' onClick={editBtnHandler}>
					Edit
				</Button>
				<Button variant='outlined' size='large' onClick={() => dispatch(deleteRecipe(props.id)).then(() => dispatch(syncRecipes()))}>
					Delete
				</Button>
			</CardActions>
		</Card>;

  const renderEditCard = (
    <Card sx={{ mb: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.greatschools.org/gk/wp-content/uploads/2016/04/Tables-charts-graphs.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <TextField
            fullWidth
            required
            label="Name"
            id="fullWidth"
            sx={{ my: 2 }}
            value={editRecipeName}
            onChange={(e) => editRecipeNameHandler(e.target.value)}
          />
        </Typography>

        <TextField
          fullWidth
          required
          label="Ingredients"
          id="fullWidth"
          sx={{ mb: 2 }}
          multiline={true}
          rows={11}
          value={editQuery}
          onChange={(e) => editQueryHandler(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="large" onClick={() => dispatch(editRecipe(editBody)).then(() => dispatch(syncRecipes())).then(() => submitBtnHandler())}>
          Submit
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() =>
            dispatch(deleteRecipe(props.id)).then(() => dispatch(syncRecipes()))
          }
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );;

  return (
		<div>
			{isEditing ? renderEditCard : renderCard}
		</div>

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
