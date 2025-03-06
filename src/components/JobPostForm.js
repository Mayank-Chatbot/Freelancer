import React, { useState } from 'react';

const JobPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, budget });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <input type="text" placeholder="Job Title" className="w-full border p-2 mt-2" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Job Description" className="w-full border p-2 mt-2" onChange={(e) => setDescription(e.target.value)}></textarea>
      <input type="number" placeholder="Budget ($)" className="w-full border p-2 mt-2" onChange={(e) => setBudget(e.target.value)} />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-3">Post Job</button>
    </form>
  );
};

export default JobPostForm;
