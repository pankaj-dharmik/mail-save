import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './UserPage';
import './App.css'; // Importing CSS for styling
import logo from './assets/2133.png'; // Import your logo image

const App = () => {
  return (
    <Router>
      <div className="app-container">
      <img src={logo} alt="Logo" className="logo"/>

        <h1>Welcome </h1>
        <Routes>
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
