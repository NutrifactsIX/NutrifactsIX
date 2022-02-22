//Import dependencies
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = function (props) {
    let fatGrams = 0;
    let carbGrams = 0;
    let proteinGrams = 0;

    for (const ingredient of props.ingredients) {
        fatGrams += ingredient.nf_total_fat;
        proteinGrams += ingredient.nf_protein;
        carbGrams += ingredient.nf_total_carbohydrate;
    }

    const data = {
        labels: ["Protein", "Carbohydrate", "Fat"],
        datasets: [{
            label: 'Macronutrients',
            data: [((proteinGrams)*5), ((carbGrams)*5), ((fatGrams)*9)],
            backgroundColor: [
                '#f44336',
                '#4caf50',
                '#2196f3'
            ],
            hoverOffset: 4
        }]
    };

    const divStyle = {
        width: '300px',
        height: '300px'
    }

    return( 
      <div style={divStyle}> 
        <Doughnut data={data}/>
      </div>
    )
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

export default DoughnutChart;