// Requests.js

import React, { useState } from 'react';
import {
  Container,
  Card,
  Divider,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';
import './InternalRequests.css'; // Import the external CSS file

const Requests = () => {
  const [name, setName] = useState('All');
  const [company, setCompany] = useState('All');
  const [readyToSchedule, setReadyToSchedule] = useState('All');
  const [status, setStatus] = useState('All');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching...');
  };

  const handleClear = () => {
    // Implement your clear logic here
    setName('All');
    setCompany('All');
    setReadyToSchedule('All');
    setStatus('All');
  };

  // Request Meeting handler
  const handleRequestMeeting = () => {
    // Implement your logic for handling the request meeting action
    console.log('Requesting Meeting...');
    // Assuming you want to navigate to the "RequestMeeting" route
    navigate('/meeting');
  };

  return (
    <>
      <Sidebar />
      <div className="requests-container">
        <div className="requests-header">
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} />Internal Requests
          </Typography>
        </div>
        <div className="requests-button-container">
          <Button component={Link} to="/Home" color="inherit" className="requests-dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="requests-vertical-divider" />
          <Typography variant="caption" className="requests-my-events-text">
            Internal Requests
          </Typography>
          <Typography variant="caption" className="requests-selected-event-text">
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Paper className="requests-form-container">
                <form className="requests-form">
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={2} className="requests-form-grid-item">
                      <FormControl fullWidth size="small">
                        <InputLabel>Name:</InputLabel>
                        <Select value={name} onChange={(e) => setName(e.target.value)}>
                          <MenuItem value="All">All</MenuItem>
                          {/* Add other name options */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} className="requests-form-grid-item">
                      <FormControl fullWidth size="small">
                        <InputLabel>Company:</InputLabel>
                        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
                          <MenuItem value="All">All</MenuItem>
                          {/* Add other company options */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} className="requests-form-grid-item">
                      <FormControl fullWidth size="small">
                        <InputLabel>Ready To Schedule Meeting:</InputLabel>
                        <Select value={readyToSchedule} onChange={(e) => setReadyToSchedule(e.target.value)}>
                          <MenuItem value="All">All</MenuItem>
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} className="requests-form-grid-item">
                      <FormControl fullWidth size="small">
                        <InputLabel>Status:</InputLabel>
                        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                          <MenuItem value="All">All</MenuItem>
                          <MenuItem value="Open">Open</MenuItem>
                          <MenuItem value="Booked">Booked</MenuItem>
                          {/* Add other status options */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} className="requests-form-grid-item">
                      <Button
                        variant="contained"
                        color="primary"
                        className="requests-form-buttons"
                        onClick={handleSearch}
                      >
                        Search
                      </Button>
                      <Button variant="contained" className="requests-form-buttons1" onClick={handleClear}>
                        Clear
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
          <Card>
            <Button
              variant="contained"
              className="requests-request-meeting-button"
              onClick={handleRequestMeeting}
            >
              Request Meeting
            </Button>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Requests;
