//Import dependencies
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AddRecipe from './AddRecipe.jsx';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
//Import Components

//React Component
const Header = ({colorMode}) => {
  return (
    <AppBar position="static"
      sx={{ position: 'fixed' }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          WOBBEGONG
        </Typography>
        <Switch onClick={colorMode.toggleColorMode}/>
        <AddRecipe/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;