// Navbar.js
import React from 'react';
import { Navbar } from 'react-bootstrap';
import Filter from './Filter';

const NavigationBar = ({ onFilter }) => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand href="#home">myMovies</Navbar.Brand>
      <Filter onFilter={onFilter} />
    </Navbar>
  );
};

export default NavigationBar;