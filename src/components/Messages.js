import React, { useState } from 'react';
import {
    Button, Card, Divider, Typography, Grid,
    Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Paper, TextField, Box, Tabs, Tab, IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from './Sidebar';
const NavigationBar = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <>
            {/* Assuming Sidebar is imported properly */}
            <Sidebar />
            <div style={{ marginLeft: '13.5%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '3%' }}>
                    <Typography variant="h6" gutterBottom>
                        <CategoryIcon fontSize="small" style={{ marginRight: '5px' }} /> Messages
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', height: '30px', background: '#D8D7D7' }}>
                    <Button component={Link} to="/Home" color="inherit" style={{ marginRight: 1, marginLeft: 20, fontSize: '60%' }}>
                        <HomeIcon style={{ marginRight: 2, width: 15 }} />
                        Dashboard
                    </Button>
                    <Divider orientation="vertical" flexItem sx={{ height: 28, marginX: 1, backgroundColor: 'black' }} />
                    <Typography variant="caption" style={{ fontSize: '60%' }}>
                        Messages
                    </Typography>
                    <Typography variant="caption" style={{ marginLeft: '65%', fontSize: '65%' }}>
                        Selected Event: <span style={{ color: '#32588D' }}>JUJAMA BPS DEMO</span>
                    </Typography>
                </div>
                <br />
                <Card style={{ width: "85%", marginLeft: "2%" }}>
                    <Paper elevation={3}>
                        <Tabs value={selectedTab} onChange={handleChange} indicatorColor="primary" textColor="primary">
                            <Tab
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <MailOutlineIcon style={{ marginRight: 5 }} />
                                        Compose
                                    </div>
                                }
                            />
                            <Tab
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <DraftsIcon style={{ marginRight: 5 }} />
                                        Inbox
                                    </div>
                                }
                            />
                            <Tab
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <SendIcon style={{ marginRight: 5 }} />
                                        Sent Items
                                    </div>
                                }
                            />
                            <Tab
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <DeleteIcon style={{ marginRight: 5 }} />
                                        Trash
                                    </div>
                                }
                            />
                            <Tab
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <SettingsIcon style={{ marginRight: 5 }} />
                                        Settings
                                    </div>
                                }
                            />
                        </Tabs>
                        <Typography component="div" style={{ padding: 8 * 3 }}>
                            {/* Content based on the selected tab */}
                            {selectedTab === 0 && (
                                <div>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1">From:</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField
                                                InputProps={{ style: { height: '40px', width: '70%' } }}
                                                fullWidth
                                                label="Enter From address"
                                            />
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1">To:</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField
                                                InputProps={{ style: { height: '40px', width: '70%' } }}
                                                fullWidth
                                                label="Enter To address"

                                            />
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1">Subject:</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField
                                                InputProps={{ style: { height: '40px', width: '70%' } }}
                                                fullWidth
                                                label="Subject"
                                                defaultValue=""
                                            />
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Typography variant="subtitle1">Message:</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField
                                                InputProps={{ style: { height: '40px', width: '70%' } }}
                                                fullWidth
                                                multiline
                                                label="Message"
                                                defaultValue=""
                                            />
                                        </Grid>
                                    </Grid>

                                    <Box mt={2}>
                                        <IconButton color="primary" variant="contained">
                                            <SendIcon />
                                        </IconButton>
                                        <IconButton color="default" onClick={() => { }}>
                                            <ClearIcon />
                                        </IconButton>
                                    </Box>
                                </div>
                            )}



                            {selectedTab === 1 && <div>Inbox Content</div>}
                            {selectedTab === 2 && <div>Sent Items Content</div>}
                            {selectedTab === 3 && <div>Trash Content</div>}
                            {selectedTab === 4 && (
                                <div>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">Display Name:</Typography>
                                            <TextField
                                                fullWidth
                                                label="Display Name:"
                                                margin="normal"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">Message Ordering:</Typography>
                                            <RadioGroup
                                                aria-label="Message Ordering"
                                                name="messageOrdering"
                                                defaultValue="descending"
                                            >
                                                <FormControlLabel
                                                    value="descending"
                                                    control={<Radio />}
                                                    label="Descending by date (new message first)"
                                                />
                                                <FormControlLabel
                                                    value="ascending"
                                                    control={<Radio />}
                                                    label="Ascending by date (new message appears last)"
                                                />
                                            </RadioGroup>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">When Sending Messages:</Typography>
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Checkbox defaultChecked />}
                                                    label="Save copy of message in sent items"
                                                />
                                            </FormGroup>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button variant="contained" color="primary" >
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}

                        </Typography>
                    </Paper>
                </Card>
            </div>
        </>
    );
};

export default NavigationBar;
