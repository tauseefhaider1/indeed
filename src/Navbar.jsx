import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/Authcontext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobFinder
          </Link>
          
          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/jobs" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Browse Jobs
            </Link>
            
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
            
            {user && (
              <span className="text-gray-700">Welcome, {user?.firstName}</span>
            )}
            
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

          {/* Mobile Menu Button - Visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/jobs" 
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Jobs
              </Link>
              
              {user && (
                <Link 
                  to="/post-job" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Post a Job
                </Link>
              )}
              
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {user && (
                <span className="text-gray-700 text-center">Welcome, {user?.firstName}</span>
              )}
              
              <div className="pt-2 border-t border-gray-200">
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <Link 
                    to="/login" 
                    className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;