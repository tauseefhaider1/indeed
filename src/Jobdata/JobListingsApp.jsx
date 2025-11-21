// JobData/JobListingsApp.jsx
import React from 'react';
import Mainjob from './Mainjob.jsx';

// This component simply renders your Mainjob component
const JobListingsApp = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600">
            Discover opportunities that match your skills and aspirations
          </p>
        </div>
        <Mainjob />
      </div>
    </div>
  );
};

export default JobListingsApp;