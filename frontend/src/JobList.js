import React, { useState, useEffect } from 'react';
import { getJobs } from './api';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobList = await getJobs();
        setJobs(jobList);
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div>
      <h2>Job List</h2>
      <ul class="JobList">
        {jobs.map((job) => (
          <li class="JobCard" key={job.id}>
            <strong>{job.title}</strong>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {/* Placeholder for other details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;