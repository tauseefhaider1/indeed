// JobData/JobDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "./JobsData.js"; // ✅ CORRECT IMPORT

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <p className="text-red-500 text-xl">Job not found</p>
      <button 
        onClick={() => navigate('/jobs')}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Jobs
      </button>
    </div>
  );

  const handleApplyClick = () => {
    if (job.applyUrl && job.applyUrl !== "#") {
      window.open(job.applyUrl, '_blank');
    } else {
      alert("Application link not available");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
        >
          ← Back to Jobs
        </button>

        <div className="border-b pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{job.title}</h1>
          <h2 className="text-2xl text-blue-600 mb-3">{job.company}</h2>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span className="flex items-center gap-1">
              📍 {job.location}
            </span>
            <span className="flex items-center gap-1">
              💼 {job.type}
            </span>
            <span className="flex items-center gap-1">
              💰 {job.salary}
            </span>
          </div>
        </div>

        {job.description ? (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Job Description</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Job Description</h3>
            <p className="text-gray-500 italic">No description available for this position.</p>
          </div>
        )}

        {job.requirements && job.requirements.length > 0 ? (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Requirements</h3>
            <p className="text-gray-500 italic">No specific requirements listed.</p>
          </div>
        )}

        {job.responsibilities && job.responsibilities.length > 0 ? (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
            <p className="text-gray-500 italic">No specific responsibilities listed.</p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t">
          <button 
            onClick={handleApplyClick}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition text-lg font-semibold"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;