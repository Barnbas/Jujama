// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import './LoginPage.css'; // Import the external styles

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ username: '', password: '' });
  };

  const handleLogin = async () => {
    const apiUrl = `http://bpsservices.jujama.com/api/Login/AuthenticateUser?username=${formData.username}&password=${formData.password}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.ResultData && data.ResultData.IsAuthenticated) {
        // Store the UserToken in local storage
        localStorage.setItem('userData', JSON.stringify(data));

        // Retrieve data from local storage
    
        // If credentials are correct, navigate to another page
        navigate('/home'); // Replace '/dashboard' with your desired route
      } else {
        alert(data.DisplayMessage || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="login-page-container">
      <Paper elevation={3} className="login-page-paper">
        <Typography component="h1" variant="h5" align="center" gutterBottom className="login-page-typography">
          Client login
        </Typography>
        <form className="login-page-form">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="login-page-text-field"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="login-page-text-field"
          />
          <Button type="button" fullWidth variant="contained" color="primary" onClick={resetForm} className="login-page-reset-button">
            Reset
          </Button>
          <Button type="button" fullWidth variant="contained" color="primary" onClick={handleLogin} className="login-page-login-button">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
