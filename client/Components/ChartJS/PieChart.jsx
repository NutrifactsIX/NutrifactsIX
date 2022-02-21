//Import dependencies
import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ["Fat", "Carbohydrate", "Protein"],
  datasets: [{
    data: [9.51, 0.72, 12.56]
  }]
};

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut data={data} />
      <h1>Working</h1>
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