import { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/jobs', { title, budget });
    alert('Job Posted!');
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="number" placeholder="Budget" value={budget} onChange={e => setBudget(e.target.value)} />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
