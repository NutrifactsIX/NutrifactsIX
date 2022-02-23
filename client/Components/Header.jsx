//Import dependencies
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/users-slice';
import React from 'react';

//Import Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AddRecipe from './AddRecipe.jsx';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

//React Component
const Header = () => {
  const dispatch = useDispatch();
  return (
    <AppBar position="static"
      sx={{ position: 'fixed', zIndex: 10 }}
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
        <AddRecipe/>
        {/* <Switch onClick={colorMode.toggleColorMode}/> */}
        <Switch onClick={() => dispatch(changeTheme())}/>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;