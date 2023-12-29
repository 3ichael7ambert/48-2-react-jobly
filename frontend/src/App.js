import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import './App.css';
import CompanyList from './CompanyList';
import JobList from './JobList';
// import Login from './Login';
// import Register from './Register';

const App = () => {
  return (
    <Router>
      <div>

        <nav>
        <h1>
          <NavLink to="/" className="logo-link">
            JOBLY
          </NavLink>
       </h1>
          <ul>
            <li>
              <NavLink to="/companies">Companies</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>

          <Route path="/companies" element={<CompanyList />} />
          <Route path="/jobs" element={<JobList />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<div className="centered-content"><h2>Welcome to Jobly!</h2></div>} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
