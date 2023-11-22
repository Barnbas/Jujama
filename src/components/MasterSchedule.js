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
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';

const MyEvents = () => {
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
      <div style={{ marginLeft: '13.5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '3%' }}>
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> Master Schedule
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: '30px', background: '#D8D7D7' }}>
          <Button component={Link} to="/Home" color="inherit" style={{ marginRight: 1, marginLeft: 20, fontSize: '60%' }}>
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem sx={{ height: 28, marginX: 1, backgroundColor: 'black' }} />
          <Typography variant="caption" style={{ fontSize: '60%' }}>
            Master Schedule
          </Typography>
          <Typography variant="caption" style={{ marginLeft: '60%', fontSize: '65%' }}>
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1%' }}>
  <div style={{ display: 'flex', alignItems: 'center', width: '400px' }}>
    <FormControl variant="outlined" style={{ width: '50%', marginRight: '10px' }} size="small">
      <InputLabel>Team Member</InputLabel>
      <Select
        value={searchTeamMember}
        onChange={(e) => setSearchTeamMember(e.target.value)}
        label="Team Member"
        inputProps={{ style: { height: '30px' } }} // Adjust the height as needed
      >
        <MenuItem value="Team A">Team A</MenuItem>
        <MenuItem value="Team B">Team B</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="outlined" style={{ width: '50%' }} size="small">
      <InputLabel>Company</InputLabel>
      <Select
        value={searchCompany}
        onChange={(e) => setSearchCompany(e.target.value)}
        label="Company"
        inputProps={{ style: { maxHeight: '10px' } }} // Adjust the height as needed
      >
        <MenuItem value="Company A">Company A</MenuItem>
        <MenuItem value="Company B">Company B</MenuItem>
      </Select>
    </FormControl>
  </div>
  <div>
    <Button variant="contained" color="primary" style={{ marginRight: '5px', fontSize: '12px', height: '30px',backgroundColor: '#66BB6A', color: 'white' }} onClick={handleSearch}>
      Search
    </Button>
    <Button variant="contained" style={{ fontSize: '12px', height: '30px',backgroundColor: '#F7505B', color: 'white' }} onClick={handleClear}>
      Clear
    </Button>
  </div>
</div>
            <div style={{ backgroundColor: '#D8D7D7', display: 'flex', justifyContent: 'space-between', padding: '1%' }}>
              <Typography variant="caption" style={{ fontSize: '75%', fontWeight: 'bold' }}>
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

export default MyEvents;
