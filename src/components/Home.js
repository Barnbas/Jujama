// src/MyEvents.js
import React, { useEffect, useState } from 'react';
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
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import Sidebar from './Sidebar';

const MyEvents = () => {
  // Sample data for demonstration
  const events = [
    { eventName: 'Event 1', startDate: '2023-01-01', endDate: '2023-01-10' },
    // Add more event data as needed
  ];

  // State to store user data
  const [user, setUser] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Set user data in state
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '13.5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '3%' }}>
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> My Events
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: '30px', background: '#D8D7D7' }}>
          <Button component={Link} to="/Home" color="inherit" style={{ marginRight: 1, marginLeft: 20, fontSize: '60%' }}>
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem sx={{ height: 28, marginX: 1, backgroundColor: 'black' }} />
          <Typography variant="caption" style={{ fontSize: '60%' }}>
            My Events
          </Typography>
          <Typography variant="caption" style={{ marginLeft: '65%', fontSize: '65%' }}>
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
   
        </div>
        <br />
        <Container>
          <Card>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Event Name</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell>{event.eventName}</TableCell>
                      <TableCell>{event.startDate}</TableCell>
                      <TableCell>{event.endDate}</TableCell>
                      <TableCell>
                        <Button component={Link} to="/Personal" variant="contained" color="primary" style={{ marginRight: 5, fontSize: '10px' }}>
                          Schedule
                        </Button>
                        <Button component={Link} to="/Agenda" variant="contained" color="primary" style={{ marginRight: 5, fontSize: '10px' }}>
                          Agenda
                        </Button>
                        <Button component={Link} to="/Messages" variant="contained" color="primary" style={{ fontSize: '10px' }}>
                          Messages
                        </Button>
                      </TableCell>
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
