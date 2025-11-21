import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const Jobcarddesign = ({ job }) => {
  const typeColor = {
    "Full-Time": "bg-green-500",
    "Part-Time": "bg-yellow-500",
    "Freelance": "bg-purple-500"
  };

  const handleApplyClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking apply
    e.stopPropagation(); // Stop event from bubbling to the Link
    if (job.applyUrl && job.applyUrl !== "#") {
      window.open(job.applyUrl, '_blank');
    }
  };

  return (
    <Link to={`/job/${job.id}`} className="block">
      <div className="border rounded-xl shadow-lg p-6 mb-6 hover:shadow-2xl transition duration-300 bg-white cursor-pointer transform hover:-translate-y-1">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
          <span className={`text-white px-3 py-1 rounded-full text-sm shadow ${typeColor[job.type] || "bg-gray-400"}`}>
            {job.type || "N/A"}
          </span>
        </div>

        <h3 className="text-gray-700 font-medium mb-2">{job.company}</h3>

        <div className="flex items-center text-gray-500 mb-1 space-x-2">
          <FaMapMarkerAlt className="text-blue-500" />
          <p>{job.location}</p>
        </div>

        <div className="flex items-center text-gray-400 mb-4 space-x-2">
          <FaDollarSign className="text-green-500" />
          <p>{job.salary}</p>
        </div>

        {/* Use button instead of anchor tag */}
        <button 
          onClick={handleApplyClick}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
      </div>
    </Link>
  );
};

export default Jobcarddesign;