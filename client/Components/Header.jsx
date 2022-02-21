//Import dependencies
import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

//Import Components

//React Component
const Header = () => {
	return (
		<>
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<Typography variant="h6">
						Facts
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Header;