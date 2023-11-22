import React, { useState } from 'react';
import {
  Container,
  Card,
  Divider,
  Grid,
  Chip,
  Typography,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Switch,
  FormControlLabel,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

import Sidebar from './Sidebar';

const MyEvents = () => {
 

  const [searchTeamMember, setSearchTeamMember] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [selectedDate, setSelectedDate] = React.useState('');





  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '13.5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '3%' }}>
          <Typography variant="h6" gutterBottom>
            <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> Update Availability
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: '30px', background: '#D8D7D7' }}>
          <Button component={Link} to="/Home" color="inherit" style={{ marginRight: 1, marginLeft: 20, fontSize: '60%' }}>
            <HomeIcon style={{ marginRight: 2, width: 15 }} />
            Dashboard
          </Button>
          <Divider orientation="vertical" flexItem sx={{ height: 28, marginX: 1, backgroundColor: 'black' }} />
          <Typography variant="caption" style={{ fontSize: '60%' }}>
            Update Availability
          </Typography>
          <Typography variant="caption" style={{ marginLeft: '60%', fontSize: '65%' }}>
            Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
          </Typography>
        </div>
        <br />
        <Container>
          <Card>
            <div style={{ backgroundColor: '#D8D7D7', display: 'flex', justifyContent: 'space-between', padding: '1%' }}>
              <Typography variant="caption" style={{ fontSize: '75%', fontWeight: 'bold' }}>
                Update Availability
              </Typography>
            </div>
          </Card>
          <br />
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12}>
              <Paper style={{ padding: 16, width: '100%', textAlign: 'center' }}>
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
                    <Typography variant="caption" style={{ color: 'green', margin: '2px' }}>
                      Available
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant="caption" style={{ color: 'red', margin: '2px' }}>
                      Not Available
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant="caption" style={{ color: 'blue', margin: '2px' }}>
                      Confirmed
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography variant="caption" style={{ color: 'brown', margin: '2px' }}>
                      Optional Attendee
                    </Typography>
                  </Grid>

                  <Grid item xs={1}>
                    <Typography variant="caption" style={{ color: 'orange', margin: '2px' }}>
                      Break
                    </Typography>
                  </Grid>

                  <Grid item xs={1}>
                    <Typography variant="caption" style={{ color: 'purple', margin: '2px' }}>
                      Session
                    </Typography>
                  </Grid>
                </Grid>
                &nbsp;
                <Typography variant="body1" style={{ marginBottom: '10px', fontSize: 'small', backgroundColor: '#D8D7D7',padding:'1%' }}>
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

export default MyEvents;
