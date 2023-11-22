import React from 'react';

import {  Routes,Route } from 'react-router-dom';
 import Sidebar from './components/Sidebar';
 import Header from './components/Header';
 import Login from './components/login';
 import Home from './components/Home';
 import Agenda from './components/Agenda';
 import Personal from './components/MyPersonalSchedule';
 import Messages from './components/Messages';
 import Master from './components/MasterSchedule';
 import Meeting from './components/RequestMetting';
 import Internal from './components/InternalRequests';
 import Update from './components/UpdateAvailability';
 import Password from './components/Password';



function App() {
  return (

      <Routes>
        <Route path="Sidebar" element={<Sidebar/>}/>
        <Route path="Header" element={<Header/>}/>
        <Route path="Login" element={<Login/>}/>

        <Route path="Home" element={<Home/>}/>
        <Route path="Agenda" element={<Agenda/>}/>
        <Route path="Personal" element={<Personal/>}/>
        <Route path="Messages" element={<Messages/>}/>
        <Route path="Master" element={<Master/>}/>
        <Route path="Meeting" element={<Meeting/>}/>
        <Route path="Internal" element={<Internal/>}/>
        <Route path="Update" element={<Update/>}/>
        <Route path="Password" element={<Password/>}/>



      </Routes>

      );
    }
    
    export default App;