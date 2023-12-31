


// src/MyEvents.js
import React, { useState } from 'react';
import {
  Container,
  Card,
  Divider,
  Typography,
  IconButton,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from './Sidebar';
import './Agenda.css'; // Import the external CSS file

const Agenda = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleAddAgenda = () => {
    const newAgenda = {
      Title: eventName,
      Date: eventDate,
      StartTime: startTime,
      EndTime: endTime,
      Location: location,
      Description: description,
    };

    setEvents([...events, newAgenda]);
    setIsAddAgendaFormOpen(false);
    // Reset form fields
    setEventName('');
    setEventDate('');
    setStartTime('');
    setEndTime('');
    setTitle('');
    setLocation('');
    setDescription('');
  };

  const [events, setEvents] = useState([
    { Title: 'Event 1', Date: '2023-01-01', StartTime: '09:00 AM', EndTime: '05:00 PM' },
    { Title: 'Event 2', Date: '2023-02-15', StartTime: '10:30 AM', EndTime: '03:30 PM' },
    // Add more event data as needed
  ]);

  const [isAddAgendaFormOpen, setIsAddAgendaFormOpen] = useState(false);

  const handleEdit = (index) => {
    console.log('Edit event:', events[index]);
  };

  const handleRemove = (index) => {
    console.log('Remove event:', events[index]);
  };

  const onClose = () => {
    setIsAddAgendaFormOpen(false);
    // Reset form fields
    setEventName('');
    setEventDate('');
  };

  return (
    <>
      <Sidebar />
      <div className="my-events-container">
      
        <div className="button-container">
          <Button component={Link} to="/Home" color="inherit" className="dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="vertical-divider" />&nbsp;
          <Typography variant="caption" className="agenda-text">
            My Agenda
          </Typography>
      
        </div>
        <br />
        <Container>
          <Card className="agenda-card">
            <div className="agenda-card1">
              <Typography variant="caption" className="agenda-text">
                My Personal Agenda
              </Typography>
              <Button onClick={() => setIsAddAgendaFormOpen(true)} aria-label="add" className="add-agenda-button">
                <AddIcon />
                <Typography variant="caption" className="add-agenda-text">
                  Add Agenda
                </Typography>
              </Button>
            </div>
            <TableContainer component={Paper} className="table-container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Start Time</TableCell>
                    <TableCell>End Time</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell>{event.Title}</TableCell>
                      <TableCell>{event.Date}</TableCell>
                      <TableCell>{event.StartTime}</TableCell>
                      <TableCell>{event.EndTime}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEdit(index)} aria-label="edit" style={{ color: '#4CAF50' }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleRemove(index)} aria-label="delete" style={{ color: '#F7505B' }}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Container>

        {/* AddAgendaForm */}
        <Dialog open={isAddAgendaFormOpen} onClose={onClose} maxWidth="sm" fullWidth className="manage-agenda-dialog">
          <DialogTitle className="dialog-title">Manage Agenda</DialogTitle>
          <DialogContent className="dialog-content">
            <FormControl fullWidth margin="normal" className="form-control">
              <InputLabel htmlFor="event-name">Event Name</InputLabel>
              <Select
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                label="Event Name"
                id="event-name"
              >
                {/* Add options for event names */}
                <MenuItem value="Event 1">Event 1</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
            <TextField
              label="Event Date"
              fullWidth
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              margin="normal"
              className="text-field"
            />
            <TextField
              label="Start Time"
              fullWidth
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              margin="normal"
              className="text-field"
            />
            <TextField
              label="End Time"
              fullWidth
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              margin="normal"
              className="text-field"
            />
            <TextField
              label="Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
              className="text-field"
            />
            <TextField
              label="Location"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              margin="normal"
              className="text-field"
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              className="text-field"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddAgenda} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Agenda;
