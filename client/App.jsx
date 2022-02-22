//import dependencies
import React from 'react';

//import components
import Header from './Components/Header.jsx';
import RecipeContainer from './Components/RecipeContainer.jsx';
import AddRecipe from './Components/AddRecipe.jsx';
import { Grid } from '@mui/material';

const App = () => (
	<Grid container direction='column'>
		<Grid item xs={12}>
			<Header />
		</Grid>
			<Grid
				item
				xs={12}
				// md={4}
				position='fixed'
				sx={{ width: 1, height: '100vh', marginTop: '125px', marginBottom: '25px' }}
			>
			<AddRecipe/>
			</Grid>
			<RecipeContainer />
	</Grid>
);

export default App;
