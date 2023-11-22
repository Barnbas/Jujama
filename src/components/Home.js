// src/Home.js
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
import './Home.css'; // Import the external CSS file

const Home = () => {
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
      <div className="home-container">
        <div className="home-header">
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> My Events
          </Typography>
        </div>
        <div className="home-button-container">
          <Button component={Link} to="/Home" color="inherit" className="home-dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="home-vertical-divider" />
          <Typography variant="caption" className="home-my-events-text">
            My Events
          </Typography>
          <Typography variant="caption" className="home-selected-event-text">
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
            <TableContainer component={Paper} className="home-table-container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="home-table-cell">Event Name</TableCell>
                    <TableCell className="home-table-cell">Start Date</TableCell>
                    <TableCell className="home-table-cell">End Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell className="home-table-cell">{event.eventName}</TableCell>
                      <TableCell className="home-table-cell">{event.startDate}</TableCell>
                      <TableCell className="home-table-cell">{event.endDate}</TableCell>
                      <TableCell>
                        <Button component={Link} to="/Personal" variant="contained" color="primary" className="home-table-buttons">
                          Schedule
                        </Button>
                        <Button component={Link} to="/Agenda" variant="contained" color="primary" className="home-table-buttons">
                          Agenda
                        </Button>
                        <Button component={Link} to="/Messages" variant="contained" color="primary" className="home-table-buttons">
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

export default Home;
