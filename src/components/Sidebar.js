// src/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
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

const Sidebar = () => {
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
    <>
      <Header />
      <Drawer variant="permanent" className="sidebar">
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem key={index} button component={Link} to={item.path} className="sidebar-item">
              <div className="sidebar-item-content">
                <ListItemIcon className="sidebar-icon">{item.icon}</ListItemIcon>
                <Typography variant="body2" className="sidebar-label">{item.text}</Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
