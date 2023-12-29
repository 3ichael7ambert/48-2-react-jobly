import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL,
});

const request = async (endpoint, data = {}, method = "get", token) => {
  console.debug("API Call:", endpoint, data, method);

  const headers = { Authorization: `Bearer ${token}` };

  try {
    return (await api({ url: endpoint, method, data, headers })).data;
  } catch (err) {
    console.error("API Error:", err.response);
    let message = err.response.data.error.message;
    throw Array.isArray(message) ? message : [message];
  }
};

// Example API routes
const getCompany = async (handle, token) => {
  let res = await request(`companies/${handle}`, {}, "get", token);
  return res.company;
};

const getCompanies = async (token) => {
  let res = await request('companies', {}, "get", token);
  return res.companies;
};

const getJobs = async (token) => {
  let res = await request('jobs', {}, "get", token);
  return res.jobs;
};

export { getCompany, getCompanies, getJobs };
