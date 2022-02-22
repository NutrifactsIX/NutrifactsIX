//Import dependencies
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const FatChart = function (props) {
    let fatGrams = 0;
    let satFat = 0;
    let cholesterol = 0;

    for (const ingredient of props.ingredients) {
        fatGrams += ingredient.nf_total_fat;
        satFat += ingredient.nf_saturated_fat;
        cholesterol += ingredient.nf_cholesterol;
    }

    const data = {
        labels: ["Remaining Total Fat", "Saturated Fat", "Cholesterol"],
        datasets: [{
            label: 'Fat by Weight',
            data: [(fatGrams - satFat - (cholesterol/1000)), satFat, ((cholesterol)/1000)],
            backgroundColor: [
                '#90caf9',
                '#2196f3',
                '#1565c0'
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

export default FatChart;