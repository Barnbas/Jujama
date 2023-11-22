import React, { useState } from 'react';
import {
  Container,
  Card,
  Divider,
  Typography,Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,  Switch,
  FormControlLabel,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';

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
      <div style={{ marginLeft: '13.5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '3%' }}>
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> Change Password

          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: '30px', background: '#D8D7D7' }}>
          <Button component={Link} to="/Home" color="inherit" style={{ marginRight: 1, marginLeft: 20, fontSize: '60%' }}>
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem sx={{ height: 28, marginX: 1, backgroundColor: 'black' }} />
          <Typography variant="caption" style={{ fontSize: '60%' }}>
          Change Password

          </Typography>
          <Typography variant="caption" style={{ marginLeft: '60%', fontSize: '65%' }}>
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
       
            <div style={{ backgroundColor: '#D8D7D7', display: 'flex', justifyContent: 'space-between', padding: '1%' }}>
              <Typography variant="caption" style={{ fontSize: '75%', fontWeight: 'bold' }}>
              Change Password

              </Typography>
             
            </div>
            <Paper style={{ padding: 18, width: 500, margin: 'auto', marginTop: 30, overflow: 'auto', maxHeight: 400 }}>
         
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
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
