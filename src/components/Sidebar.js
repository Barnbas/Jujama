// src/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MessageIcon from '@mui/icons-material/Message';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import UpdateIcon from '@mui/icons-material/Update';
import EventIcon from '@mui/icons-material/Event';
import Header from './Header';

import './Sidebar.css';

const drawerWidth = 240;

const useStyles = {
  container: {
  },
  toggleButton: {
    marginRight: 2,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop:"10%"
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:"10%"

  },
  drawerContainer: {
    margin: 20, // Adjust the margin for the gap inside DrawerPaper
    overflow: 'auto',
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    marginBottom: 30, // Add margin-bottom for gap between items
    marginLeft:-15,
    width:210,
    '&:hover': {
      backgroundColor: '#555',
    },
  },
  sidebarIcon: {
    marginRight: -25, // Adjust the margin between icon and label
  },
 
};
const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/home' },
    { text: 'Personal Agenda', icon: <EventNoteIcon />, path: '/Agenda' },
    { text: 'My Personal Schedule', icon: <EventIcon />, path: '/Personal' },
    { text: 'Messages', icon: <MessageIcon />, path: '/Messages' },
    { text: 'Master Schedule', icon: <ScheduleIcon />, path: '/Master' },
    { text: 'Request Meeting', icon: <MeetingRoomIcon />, path: '/Meeting' },
    { text: 'Internal Requests', icon: <ContactMailIcon />, path: '/Internal' },
    { text: 'Update Availability', icon: <UpdateIcon />, path: '/Update' },
  ];

  return (
    <div style={useStyles.container}>
      <Header />
      <IconButton onClick={toggleSidebar} style={useStyles.toggleButton}>
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        style={useStyles.drawer}
        variant="temporary"
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        classes={{
          paper: useStyles.drawerPaper,
        }}
      >
        <div style={useStyles.drawerContainer}>
          <List>
            {sidebarItems.map((item, index) => (
              <ListItem
                key={index}
                button
                component={Link}
                to={item.path}
                style={useStyles.sidebarItem}
                onClick={toggleSidebar}
              >
                <ListItemIcon style={useStyles.sidebarIcon}>{item.icon}</ListItemIcon>
                <Typography variant="body2">{item.text}</Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
