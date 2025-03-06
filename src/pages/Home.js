import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs').then(response => setJobs(response.data));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>Budget:₹{job.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
