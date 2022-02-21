//import dependencies
import React from 'react';

//import components
// import './App.scss';
import Header from './Components/Header.jsx'
import RecipeContainer from './Components/RecipeContainer.jsx';
import AddRecipe from './Components/AddRecipe.jsx';
import { Grid } from '@mui/material';
// import Input from './Components/IngredientInput'


const App = () => (

        <Grid container direction='column'>
            <Grid item xs={12}>
							<Header />
						</Grid>
						<Grid container spacing={4} padding={4}>
							<Grid item xs={12} md={4} position='sticky'>
								<AddRecipe />
							</Grid>
							<Grid item xs={12} md={8}>
            		<RecipeContainer/>
							</Grid>
						</Grid>
        </Grid>
)

export default App