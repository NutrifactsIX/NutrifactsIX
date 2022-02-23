//import dependencies
import React, {useState, useMemo} from 'react';

//import components
import Header from './Components/Header.jsx';
import RecipeContainer from './Components/RecipeContainer.jsx';
import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
  //Sets light or dark mode
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
      },
    }), [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }), [mode],
  );
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction='column'>
        <Header {...{colorMode}}/>
        <RecipeContainer />
      </Grid>
    </ThemeProvider>
  );};

export default App;
