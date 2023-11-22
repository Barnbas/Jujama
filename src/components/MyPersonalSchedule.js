// src/MyEvents.js
import React from 'react';
import { Container,Card,Divider , Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';
const MyEvents = () => {

  const rows = [
    { date: '2023-01-01', timeSlot: '10:00 AM - 11:00 AM', type: 'Meeting', subject: 'Project Discussion', location: 'Conference Room A', internalParticipants: 'John, Jane', externalParticipants: 'Client A, Client B' },
    // Add more rows as needed
  ];
  return (
    <>
<Sidebar/>
<div style={{marginLeft:"13.5%"}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginLeft:"3%" }}>
      <Typography variant="h6" gutterBottom>
      <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} />My Personal Schedule
      </Typography>
       
      </div>
        <div style={{ display: 'flex', alignItems: 'center' , height: '30px' , background: '#D8D7D7'}}>
          <Button component={Link} to="/Home" color="inherit" style={{ marginRight: 1,marginLeft:20,fontSize:"60%" }}>
          <HomeIcon style={{ marginRight: 2,width:15 }} />
 Dashboard 
          </Button>
          <Divider orientation="vertical" flexItem sx={{ height: 28, marginX: 1, backgroundColor: 'black' }} />
          <Typography variant="caption" style={{  fontSize:"60%" }}>

          My Personal Schedule
            </Typography>
          <Typography variant="caption" style={{  marginLeft: '60%' ,fontSize:"65%"}}>
  Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
</Typography>

        </div>
    <br/>
    <Container>
    <Card>
    <div style={{ backgroundColor: '#D8D7D7', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <Typography variant="caption" style={{ fontSize: '14px', fontWeight: 'bold' }}>
    My Schedule
  </Typography>

  <div style={{ marginTop: '10px', display: 'flex' }}>
  <Button
  variant="contained"
  style={{ marginRight: '5px', fontSize: '10px', backgroundColor: '#47515B', color: 'white' }}
>
  Export to Personal Calendar
</Button>

    <Button
      variant="contained"
      color="secondary"
      style={{ marginRight: '5px', fontSize: '10px', backgroundColor: '#5090D9', color: 'white' }}
      >
      Export to Excel
    </Button>
    <Button
      variant="contained"
      style={{ marginRight: '5px', fontSize: '10px', backgroundColor: '#66BB6A', color: 'white' }}
      >
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
