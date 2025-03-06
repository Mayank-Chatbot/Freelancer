import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.description}</p>
      <p className="font-semibold text-green-500">${job.budget}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Apply</button>
    </div>
  );
};

export default JobCard;
