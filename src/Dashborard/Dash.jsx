// Dashborard/Dash.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authcontext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-gray-600 mt-2">
            Ready to find your next opportunity?
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Jobs</h3>
            <p className="text-gray-600 mb-4">Explore all available positions</p>
            <Link 
              to="/jobs" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-block"
            >
              View All Jobs
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Post a Job</h3>
            <p className="text-gray-600 mb-4">Looking for talent? Post your job opening</p>
            <Link 
              to="/post-job" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-block"
            >
              Post a Job
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Profile</h3>
            <p className="text-gray-600 mb-4">Update your information</p>
            <div className="text-sm text-gray-600">
              <p><strong>Role:</strong> {user?.jobTitle || 'Not specified'}</p>
              <p><strong>Email:</strong> {user?.email}</p>
            </div>
          </div>
        </div>

        {/* Quick Search Section */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Quick Job Search</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">Filter by job type</p>
            <div className="flex flex-wrap gap-2">
              <Link 
                to="/jobs?type=Full-Time" 
                className="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 font-medium"
              >
                Full-Time Jobs
              </Link>
              <Link 
                to="/jobs?type=Part-Time" 
                className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-200 font-medium"
              >
                Part-Time Jobs
              </Link>
              <Link 
                to="/jobs?type=Freelance" 
                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 font-medium"
              >
                Freelance Jobs
              </Link>
              <Link 
                to="/jobs?location=Remote" 
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 font-medium"
              >
                Remote Jobs
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Jobs Preview */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Recent Job Opportunities</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">Check out the latest job postings from top companies</p>
            <Link 
              to="/jobs" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 inline-block"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;