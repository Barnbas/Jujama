// src/Master.js
import React, { useState } from 'react';
import {
  Container, Card, Divider, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';
import './Master.css'; // Import the external styles

const Master = () => {
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

  return (
    <>
      <Sidebar />
      <div className="master-container">
        {/* <div className="master-header">
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> Master Schedule
          </Typography>
        </div> */}
        <div className="master-button-container">
          <Button component={Link} to="/Home" color="inherit" className="master-dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="master-vertical-divider" />
          <Typography variant="caption" className="master-my-events-text">
            Master Schedule
          </Typography>
          <Typography variant="caption" className="master-selected-event-text">
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
            <div className="master-table-header">
            <div className="master-filter-container">
              <FormControl variant="outlined" className="master-filter" size="small">
                <InputLabel>Team Member</InputLabel>
                <Select
                  value={searchTeamMember}
                  onChange={(e) => setSearchTeamMember(e.target.value)}
                  label="Team Member"
                >
                  <MenuItem value="Team A">Team A</MenuItem>
                  <MenuItem value="Team B">Team B</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="outlined" className="master-filter" size="small">
                <InputLabel>Company</InputLabel>
                <Select
                  value={searchCompany}
                  onChange={(e) => setSearchCompany(e.target.value)}
                  label="Company"
                >
                  <MenuItem value="Company A">Company A</MenuItem>
                  <MenuItem value="Company B">Company B</MenuItem>
                </Select>
              </FormControl>
            </div>
              <div className="master-button-group">
                <Button variant="contained" color="primary"   className="master-search-button" onClick={handleSearch} size='small'>
                  Search
                </Button>&nbsp;
                <Button variant="contained" className="master-clear-button" onClick={handleClear} size='small' >
                  Clear
                </Button>
              </div>
            </div>

            <div className="master-table-subheader">
              <Typography variant="caption" className="master-text">
                Team Member Schedule
              </Typography>
            </div>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Organizer</TableCell>
                    <TableCell>Internal Participants</TableCell>
                    <TableCell>External Participants</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Slot Time</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell>{event.organizer}</TableCell>
                      <TableCell>{event.internalParticipants}</TableCell>
                      <TableCell>{event.externalParticipants}</TableCell>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.slotTime}</TableCell>
                      <TableCell>{event.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Master;
