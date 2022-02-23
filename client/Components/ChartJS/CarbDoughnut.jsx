//Import dependencies
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const CarbChart = function (props) {
  let totalCarbs = 0;
  let dietaryFiber = 0;
  let sugars = 0;

  for (const ingredient of props.ingredients) {
    totalCarbs += ingredient.nf_total_carbohydrate;
    dietaryFiber += ingredient.nf_dietary_fiber;
    sugars += ingredient.nf_sugars;
  }
    
  const data = {
    labels: ['Remaining Carbohydrate', 'Dietary Fiber', 'Sugars'],
    datasets: [{
      label: 'Total Carbohydrates',
      data: [(totalCarbs - dietaryFiber - sugars), dietaryFiber, sugars],
      backgroundColor: [
        '#a5d6a7',
        '#4caf50',
        '#2e7d32'
      ],
      hoverOffset: 4
    }]
  };

  const divStyle = {
    width: '300px',
    height: '300px'
  };

  return( 
    <div style={divStyle}> 
      <Doughnut data={data}/>
    </div>
  );
};

// "food_name": "eggs",
// "serving_qty": 2,
// "serving_unit": "large",
// "serving_weight_grams": 100,
// "nf_calories": 143,
// "nf_total_fat": 9.51,
// "nf_saturated_fat": 3.13,
// "nf_cholesterol": 372,
// "nf_sodium": 142,
// "nf_total_carbohydrate": 0.72,
// "nf_dietary_fiber": 0,
// "nf_sugars": 0.37,
// "nf_protein": 12.56,

export default CarbChart;