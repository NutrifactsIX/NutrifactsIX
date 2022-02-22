//Import dependencies
import React from 'react';
import {Grid} from '@mui/material';

//Import Components
import DoughnutChart from './ChartJS/PieChart.jsx';
import FatDoughnut from './ChartJS/FatDoughnut.jsx';
import CarbDoughnut from './ChartJS/CarbDoughnut.jsx'

const ChartContainer = function(props) {

  return (
    <Grid container className="chartContainer" spacing={2} padding={3}>
      <Grid item xs={4} align='center'>
        <DoughnutChart ingredients={props.ingredientList} />
      </Grid>
      <Grid item xs={4} align='center'>
        <FatDoughnut ingredients={props.ingredientList} />
      </Grid>
      <Grid item xs={4} align='center'>
        <CarbDoughnut ingredients={props.ingredientList} />
      </Grid>
    </Grid>
  )

};

export default ChartContainer;
