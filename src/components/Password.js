// src/ChangePasswordForm.js
import React, { useState } from 'react';
import {
  Container, Card, Divider, Typography, TextField, Button, Paper
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';
import './PasswordForm.css'; // Import the external styles

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to handle password change here
    // You can compare newPassword and confirmNewPassword to ensure they match

    // Clear form fields after submission
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <>
      <Sidebar />
      <div className="change-password-container">
        <div className="change-password-header">
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> Change Password
          </Typography>
        </div>
        <div className="change-password-button-container">
          <Button component={Link} to="/Home" color="inherit" className="change-password-dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="change-password-vertical-divider" />
          <Typography variant="caption" className="change-password-text">
            Change Password
          </Typography>
          <Typography variant="caption" className="change-password-selected-event-text">
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
            <div className="change-password-card-header">
              <Typography variant="caption" className="change-password-text">
                Change Password
              </Typography>
            </div>
            <Paper className="change-password-paper">
              <form onSubmit={handleSubmit} className="change-password-form">
                <TextField
                  label="Current Password" size='small'
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <TextField
                  label="New Password" size='small'
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <TextField
                  label="Confirm New Password" size='small'
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" className="change-password-submit-button">
                  Change Password
                </Button>
              </form>
            </Paper>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default ChangePasswordForm;
