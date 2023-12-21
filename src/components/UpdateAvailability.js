// src/Update.js
import React, { useState } from 'react';
import {
  Container, Card, Divider, Grid, Chip, Typography,
  FormControl, InputLabel, Select, MenuItem, Paper,Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';
import './Update.css'; // Import the external styles

const Update = () => {
  const [searchTeamMember, setSearchTeamMember] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [selectedDate, setSelectedDate] = React.useState('');

  return (
    <>
      <Sidebar />
      <div className="update-container">
        {/* <div className="update-header">
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> Update Availability
          </Typography>
        </div> */}
        <div className="update-button-container">
          <Button component={Link} to="/Home" color="inherit" className="update-dashboard-button">
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem className="update-vertical-divider" />
          <Typography variant="caption" className="update-text">
            Update Availability
          </Typography>
          <Typography variant="caption" className="update-selected-event-text">
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
            <div className="update-card-header">
              <Typography variant="caption" className="update-availability-text">
                Update Availability
              </Typography>
            </div>
          </Card>
          <br />
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12}>
              <Paper className="update-paper">
                <Grid container spacing={0}>
                  <Grid item xs={2}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Select Date</InputLabel>
                      <Select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                        <MenuItem value="2023-12-01">December 1, 2023</MenuItem>
                        <MenuItem value="2023-12-15">December 15, 2023</MenuItem>
                        <MenuItem value="2023-12-31">December 31, 2023</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant="caption" className="availability-chip available">
                      Available
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant="caption" className="availability-chip Notavailable">
                      Not Available
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant="caption" className="availability-chip Confirmed">
                      Confirmed
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant="caption" className="availability-chip Optional">
                      Optional Attendee
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="caption" className="availability-chip break">
                      Break
                    </Typography>
                  </Grid>

                  <Grid item xs={1}>
                    <Typography variant="caption" className="availability-chip session">
                      Session
                    </Typography>
                  </Grid>
                </Grid>
                &nbsp;
                <Typography variant="body1" className="update-tip">
                  Tip: If there are times during the day you will not be available for meetings, please use the grid below to block those times. Once you make your edits, you must click Update Changes to save.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Update;
