// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';

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
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50, backgroundImage: 'url("/path/to/background-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
         Client login
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
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
          />
          <Button type="button" fullWidth variant="contained" color="primary" onClick={resetForm} style={{ marginTop: 10 }}>
            Reset
          </Button>
          <Button type="button" fullWidth variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: 10 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
