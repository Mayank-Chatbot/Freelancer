import React from 'react';

const FreelancerCard = ({ freelancer }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={freelancer.avatar} alt="Profile" className="w-16 h-16 rounded-full" />
      <h3 className="font-bold">{freelancer.name}</h3>
      <p className="text-gray-600">{freelancer.skills}</p>
      <p className="font-semibold text-green-500">${freelancer.rate}/hr</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Hire</button>
    </div>
  );
};

export default FreelancerCard;
