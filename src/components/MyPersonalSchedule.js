// src/MyEvents.js
import React from 'react';
import {
  Container, Card, Divider, Typography, Table, TableContainer,
  TableHead, TableRow, TableCell, TableBody, Paper, Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';
import './MypersonalSchedule.css'; // Import the external styles

const MyEvents = () => {
  const rows = [
    {
      date: '2023-01-01',
      timeSlot: '10:00 AM - 11:00 AM',
      type: 'Meeting',
      subject: 'Project Discussion',
      location: 'Conference Room A',
      internalParticipants: 'John, Jane',
      externalParticipants: 'Client A, Client B'
    },
    // Add more rows as needed
  ];

  return (
    <>
      <Sidebar />
      <div className="my-events-container">
        <div className="my-events-header">
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> My Personal Schedule
          </Typography>
        </div>
        <div className="my-events-button-container">
          <Button component={Link} to="/Home" color="inherit" className="my-events-dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="my-events-vertical-divider" />
          <Typography variant="caption" className="my-events-text">
            My Personal Schedule
          </Typography>
          <Typography variant="caption" className="my-events-selected-event-text">
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
            <div className="my-events-card-header">
              <Typography variant="caption" className="my-events-schedule-text">
                My Schedule
              </Typography>
              <div className="my-events-action-buttons">
                <Button variant="contained" className="my-events-export-button1">
                  Export to Personal Calendar
                </Button>
                <Button variant="contained" color="secondary" className="my-events-export-button2">
                  Export to Excel
                </Button>
                <Button variant="contained" className="my-events-export-button3">
                  Email My Personal
                </Button>
              </div>
            </div>
            <Card>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Time Slot</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Subject</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Internal Participants</TableCell>
                      <TableCell>External Participants</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.timeSlot}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.subject}</TableCell>
                        <TableCell>{row.location}</TableCell>
                        <TableCell>{row.internalParticipants}</TableCell>
                        <TableCell>{row.externalParticipants}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default MyEvents;
