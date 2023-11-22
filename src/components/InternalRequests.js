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
  TableBody,Box,
  Paper,
  Button,
  FormControl,
  InputLabel,Grid,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';

const MyEvents = () => {
    const [name, setName] = useState('All');
    const [company, setCompany] = useState('All');
    const [readyToSchedule, setReadyToSchedule] = useState('All');
    const [status, setStatus] = useState('All');
  
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
    const navigate = useNavigate();

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
      <div style={{ marginLeft: '13.5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '3%' }}>
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} />Internal Requests
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: '30px', background: '#D8D7D7' }}>
          <Button component={Link} to="/Home" color="inherit" style={{ marginRight: 1, marginLeft: 20, fontSize: '60%' }}>
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem sx={{ height: 28, marginX: 1, backgroundColor: 'black' }} />
          <Typography variant="caption" style={{ fontSize: '60%' }}>
          Internal Requests
          </Typography>
          <Typography variant="caption" style={{ marginLeft: '60%', fontSize: '65%' }}>
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
        <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Paper style={{ padding: 14, width: '98%' }}>
          <form>
            <Grid container spacing={1} alignItems="center">
            <Grid item xs={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Name:</InputLabel>
                  <Select value={name} onChange={(e) => setName(e.target.value)}>
                    <MenuItem value="All">All</MenuItem>
                    {/* Add other name options */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Company:</InputLabel>
                  <Select value={company} onChange={(e) => setCompany(e.target.value)}>
                    <MenuItem value="All">All</MenuItem>
                    {/* Add other company options */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Ready To Schedule Meeting:</InputLabel>
                  <Select value={readyToSchedule} onChange={(e) => setReadyToSchedule(e.target.value)}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
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
              <Grid item xs={2}>
                  <Button variant="contained" color="primary" style={{ marginRight: '5px',backgroundColor: '#66BB6A', color: 'white' }} size="small" onClick={handleSearch}>
                    Search
                  </Button>
                  <Button variant="contained" size="small" onClick={handleClear}>
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
                    size="small"
                    style={{ marginLeft: '85%', backgroundColor: '#47515B', color: 'white'  }}
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

export default MyEvents;
