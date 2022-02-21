//import dependencies
import React from 'react';

//import components
// import './App.scss';
import Header from './Components/Header.jsx'
import RecipeContainer from './Components/RecipeContainer.jsx';
import AddRecipe from './Components/AddRecipe.jsx';
import { Grid } from '@mui/material';
// import Input from './Components/IngredientInput'
import IngredientInput from './Components/IngredientInput.jsx';
// import Chart from PieChart.jsx
// import DoughnutChart from './Components/ChartJS/PieChart.jsx';

const App = () => (
	// <div className='App'>
  //       <IngredientInput />
	// 	<RecipeContainer />
	// 	{/* <DoughnutChart /> */}
	// </div>
// );

        <Grid container direction='column'>
            <Grid item xs={12}>
							<Header />
						</Grid>
						<Grid container spacing={4} padding={4}>
							<Grid item xs={12} md={4} position='fixed' sx={{width: 1, height: '100vh'}}>
								<AddRecipe/>
							</Grid>
							<Grid item xs={0} md={4}></Grid>
							<Grid item xs={12} md={8}>
            		<RecipeContainer/>
							</Grid>
						</Grid>
        </Grid>
)

export default App
