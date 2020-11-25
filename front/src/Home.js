import React from 'react';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <br></br>
      <center><h1>UNC Course Search</h1></center><hr/>
      <br></br>
      <NavLink className="nav-link" to="/textSearch">Search by Text</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Quick and simple search by keyword.
      <br></br>
      <NavLink className="nav-link" to='/courseCloud'>Course Cloud</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Visualize your search result with Word Cloud.
      <br></br>
      <NavLink className="nav-link" to='/result'>Search by Filter</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Search all UNC courses with advanced filters.
    </div>
  );
}

export default Home;
