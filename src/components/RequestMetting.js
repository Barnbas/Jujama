// src/RequestMeeting.js
import React, { useState } from 'react';
import {
  Container, Card, Divider, Typography, Box, Table, TableContainer,
  TableHead, TableRow, TableCell, TableBody, Paper, Switch,
  FormControlLabel, Button, FormControl, InputLabel, Select, MenuItem, TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';
import './RequestMeeting.css'; // Import the external styles

const RequestMeeting = () => {
  const [events, setEvents] = useState([
    {
      organizer: 'John Doe',
      internalParticipants: 'Team A',
      externalParticipants: 'Guest User',
      date: '2023-01-01',
      slotTime: '10:00 AM - 12:00 PM',
      location: 'Conference Room 1',
    },
    // Add more event data as needed
  ]);

  const [searchTeamMember, setSearchTeamMember] = useState('');
  const [searchCompany, setSearchCompany] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    // You can filter the events based on the search criteria
    console.log('Searching...', searchTeamMember, searchCompany);
  };

  const handleClear = () => {
    setSearchTeamMember('');
    setSearchCompany('');
    // Implement logic to reset the search and display all events
    console.log('Clearing search...');
  };
  const [readyToSchedule, setReadyToSchedule] = useState(false);

  const handleSwitchChange = () => {
    setReadyToSchedule(!readyToSchedule);
  };

  return (
    <>
      <Sidebar />
      <div className="request-meeting-container">
   
        <div className="request-meeting-button-container">
          <Button component={Link} to="/Home" color="inherit" className="request-meeting-dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="request-meeting-vertical-divider" />
          <Typography variant="caption" className="request-meeting-text">
            Request Meeting
          </Typography>
          <Typography variant="caption" className="request-meeting-selected-event-text">
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
            <div className="request-meeting-card-header">
              <Typography variant="caption" className="request-meeting-schedule-text">
                Request Meeting
              </Typography>
            </div>
            <Paper className="request-meeting-paper">
              <form>
                <FormControl fullWidth margin="normal" size="small">
                  <Typography variant="subtitle1">Ready to Schedule Meeting:</Typography>
                  <FormControlLabel
                    control={<Switch checked={readyToSchedule} onChange={handleSwitchChange} />}
                    label={readyToSchedule ? 'YES' : 'NO'}
                  />
                </FormControl>

                <TextField
                  fullWidth
                  label="Meeting Requestor"
                  placeholder="Sudharshan Reddy"
                  margin="normal"
                  size="small"
                />

                <FormControl fullWidth margin="normal" size="small">
                  <InputLabel>Select Participants:</InputLabel>
                  <Select>
                    <MenuItem value="No participants selected.">No participants selected.</MenuItem>
                    <MenuItem value="Participant 1">Participant 1</MenuItem>
                    <MenuItem value="Participant 2">Participant 2</MenuItem>
                    {/* Add more participants as needed */}
                  </Select>
                </FormControl>

          <FormControl variant="outlined" fullWidth margin="normal" size="small">
            <InputLabel>Meeting Length:</InputLabel>
            <Select>
              <MenuItem value="Select Meeting Length">Select Meeting Length</MenuItem>
              <MenuItem value="30 minute meeting + 15 minute debrief">30 minute meeting + 15 minute debrief</MenuItem>
              <MenuItem value="60 minute meeting (no debrief)">60 minute meeting (no debrief)</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        


        
          <FormControl variant="outlined" fullWidth margin="normal" size="small">
            <InputLabel>Focus of Meeting:</InputLabel>
            <Select>
              <MenuItem value="Select Focus of Meeting">Select Focus of Meeting</MenuItem>
              <MenuItem value="Low Priority Meeting">Low Priority Meeting</MenuItem>
              <MenuItem value="Breakfast Meeting">Breakfast Meeting</MenuItem>
              <MenuItem value="Lunch Meeting">Lunch Meeting</MenuItem>
              <MenuItem value="Offsite Meeting">Offsite Meeting</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" fullWidth margin="normal" size="small">
            <InputLabel>Phase:</InputLabel>
            <Select>
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Clinical">Clinical</MenuItem>
              <MenuItem value="Pre-Clinical">Pre-Clinical</MenuItem>
              {/* Add more phases as needed */}
            </Select>
          </FormControl>

          <TextField fullWidth label="LKR Number" margin="normal"size="small" />

          <FormControl fullWidth margin="normal" size="small">
            <InputLabel>Merck Internal Discussion:</InputLabel>
            <Select>
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Discussion 1">Discussion 1</MenuItem>
              <MenuItem value="Discussion 2">Discussion 2</MenuItem>
              {/* Add more discussions as needed */}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Topic to be Communicated to External Company"
            multiline
            rows={4}
            margin="normal"
          />

          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              SUBMIT
            </Button>
          </Box>
        </form>
      </Paper>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default RequestMeeting;
