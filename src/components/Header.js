// src/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import the external CSS file

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangePassword = () => {
    // Implement your change password logic here
    navigate('/Password');
    handleMenuClose();
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user data from localStorage
    localStorage.removeItem('userData');
  
    // Use navigate to go to the login component
    navigate('/login');
  
    // Close the menu
    handleMenuClose();
  };
  

  return (
    <AppBar position="static" className="header-app-bar " style={{backgroundColor:"#32588D"}}>
      <Toolbar className="header-toolbar">
        <img src="https://s3.amazonaws.com/JuJaMa.UserContent/a3029598-c288-40a9-8ad9-b3de2cb10c38.png" alt="User Avatar" className="header-avatar" />

        <Typography variant="h6" component="div" className="header-welcome-text">
          Welcome, {storedData?.ResultData?.Data?.Table[0]?.FirstName} {storedData?.ResultData?.Data?.Table[0]?.LastName}
        </Typography>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
          className="header-account-icon"
        >
          <AccountCircleIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          className="header-menu"
        >
          <MenuItem onClick={handleChangePassword} className="header-menu-item">Change Password</MenuItem>
          <MenuItem onClick={handleLogout} className="header-menu-item">Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
