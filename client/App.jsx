//import dependencies
import React from 'react';

//import components
import './App.scss';
// import Head from './Components/Header.jsx'
import RecipeContainer from './Components/RecipeContainer.jsx';
// import Input from './Components/IngredientInput'
import IngredientInput from './Components/IngredientInput.jsx';
// import Chart from PieChart.jsx
// import DoughnutChart from './Components/ChartJS/PieChart.jsx';

const App = () => (
	<div className='App'>
        <IngredientInput />
		<RecipeContainer />
		{/* <DoughnutChart /> */}
	</div>
);

export default App;
