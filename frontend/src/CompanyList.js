import React, { useState, useEffect } from 'react';
import './CompanyList.css';

import { getCompanies } from './api';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companyList = await getCompanies();
        setCompanies(companyList);
      } catch (error) {
        console.error('Error fetching companies:', error.message);
      }
    };

    fetchCompanies();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div >
      <h2>Company List</h2>
      <ul class="CompanyList" >
        {companies.map((company) => (
          <li class="CompanyCard" key={company.handle}>
            <strong>{company.name}</strong>
            <p>{company.description}</p>
            {/* other details  */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;