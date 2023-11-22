// src/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  console.log(storedData);
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
    console.log("Logging out...");
    handleMenuClose();
  };

  return (
    <AppBar position="static" style={{backgroundColor:"#32588D"}}>
      <Toolbar>
      <img src="https://s3.amazonaws.com/JuJaMa.UserContent/a3029598-c288-40a9-8ad9-b3de2cb10c38.png" alt="User Avatar" style={{  width: '15%' }} />

      <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 90 }}>
  Welcome, {storedData?.ResultData?.Data?.Table[0]?.FirstName} {storedData?.ResultData?.Data?.Table[0]?.LastName}
</Typography>


        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
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
        >
          <MenuItem onClick={handleChangePassword}>Change Password</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
