// In your Dashboard Navbar component
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/Authcontext';
// import { AuthContext } from '../Context/Authcontext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobFinder
          </Link>
          
          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <Link 
              to="/jobs" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Browse Jobs
            </Link>
            
            {/* Post Job Button - Only show if user is logged in */}
            {user && (
              <Link 
                to="/post-job" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium"
              >
                Post a Job
              </Link>
            )}
            
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Dashboard
            </Link>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            
            {/* User Info */}
            {user && (
              <span className="text-gray-700">Welcome, {user?.firstName}</span>
            )}
            
            {/* Logout Button */}
            {user ? (
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-medium"
              >
                Logout
              </button>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;