// Homepage.jsx - Remove the internal Navbar
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* REMOVED the internal Navbar since App.js already provides one */}
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream
            <span className="text-blue-600 block">Job Today</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who found their perfect career match. 
            Create your profile and let employers find you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              to="/jobs" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg shadow-lg transition duration-300"
            >
              Browse All Jobs
            </Link>
            <Link 
              to="/signup" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold text-lg transition duration-300"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300"
            >
              I Have an Account
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl mb-3">🚀</div>
              <h3 className="font-semibold text-lg mb-2">Quick Setup</h3>
              <p className="text-gray-600">Create your profile in minutes and start applying immediately.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl mb-3">💼</div>
              <h3 className="font-semibold text-lg mb-2">Top Companies</h3>
              <p className="text-gray-600">Connect with leading employers and startups worldwide.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Smart Matching</h3>
              <p className="text-gray-600">Get matched with jobs that fit your skills and preferences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Job Search Preview Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Latest Opportunities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover jobs that match your skills and aspirations
            </p>
            <Link 
              to="/jobs"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-semibold text-lg"
            >
              View All Job Listings
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600">Jobs Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100K+</div>
              <div className="text-gray-600">Hired</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;