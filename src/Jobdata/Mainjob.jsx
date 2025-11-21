// JobData/Mainjob.jsx
import React, { useState, useEffect } from 'react';
import { jobs as defaultJobs } from './JobsData.js'; // ✅ CORRECT IMPORT
import Jobcarddesign from './Jobcarddesign.jsx';
import { useLocation } from 'react-router-dom';

const Mainjob = () => {
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [companyFilter, setCompanyFilter] = useState('All');
  const [salaryFilter, setSalaryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [postedJobs, setPostedJobs] = useState([]);
  
  const location = useLocation();

  // Get posted jobs from localStorage
  useEffect(() => {
    const savedPostedJobs = JSON.parse(localStorage.getItem('postedJobs') || '[]');
    setPostedJobs(savedPostedJobs);
  }, []);

  // Combine default jobs and posted jobs
  const allJobs = [...defaultJobs, ...postedJobs];

  // Get URL parameters for quick filters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const typeParam = urlParams.get('type');
    if (typeParam) {
      setTypeFilter(typeParam);
    }
  }, [location]);

  // Get unique values for filters
  const locations = ['All', ...new Set(allJobs.map(job => job.location))];
  const companies = ['All', ...new Set(allJobs.map(job => job.company))];
  const jobTypes = ['All', ...new Set(allJobs.map(job => job.type))];

  const filteredJobs = allJobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (locationFilter === 'All' || job.location === locationFilter) &&
    (typeFilter === 'All' || job.type === typeFilter) &&
    (companyFilter === 'All' || job.company === companyFilter) &&
    (salaryFilter === 'All' || 
      (salaryFilter === 'under-80k' && (
        job.salary.includes('$60,000') || 
        job.salary.includes('$70,000') ||
        job.salary.includes('$80,000') ||
        (job.salary.includes('/hr') && parseInt(job.salary.replace(/[^0-9]/g, '')) < 40)
      )) ||
      (salaryFilter === '80k-100k' && (
        job.salary.includes('$85,000') || 
        job.salary.includes('$90,000') ||
        job.salary.includes('$95,000') ||
        job.salary.includes('$100,000') ||
        (job.salary.includes('/hr') && parseInt(job.salary.replace(/[^0-9]/g, '')) >= 40 && parseInt(job.salary.replace(/[^0-9]/g, '')) <= 60)
      )) ||
      (salaryFilter === 'over-100k' && (
        job.salary.includes('$110,000') || 
        job.salary.includes('$120,000') ||
        job.salary.includes('$130,000') ||
        job.salary.includes('$140,000') ||
        job.salary.includes('$150,000') ||
        job.salary.includes('$160,000') ||
        job.salary.includes('$170,000') ||
        (job.salary.includes('/hr') && parseInt(job.salary.replace(/[^0-9]/g, '')) > 60)
      )))
  );

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'salary-high':
        return extractMaxSalary(b.salary) - extractMaxSalary(a.salary);
      case 'salary-low':
        return extractMinSalary(a.salary) - extractMinSalary(b.salary);
      case 'company':
        return a.company.localeCompare(b.company);
      default:
        return 0;
    }
  });

  // Helper function to extract max salary
  const extractMaxSalary = (salaryString) => {
    if (salaryString.includes('/hr')) {
      const hourlyRate = parseInt(salaryString.replace(/[^0-9]/g, ''));
      return hourlyRate * 2000; // Approximate annual (40hrs/week * 50 weeks)
    }
    const matches = salaryString.match(/\$([0-9,]+)/g);
    if (matches && matches.length > 1) {
      return parseInt(matches[1].replace(/[^0-9]/g, ''));
    }
    return parseInt(salaryString.replace(/[^0-9]/g, ''));
  };

  // Helper function to extract min salary
  const extractMinSalary = (salaryString) => {
    if (salaryString.includes('/hr')) {
      const hourlyRate = parseInt(salaryString.replace(/[^0-9]/g, ''));
      return hourlyRate * 2000; // Approximate annual (40hrs/week * 50 weeks)
    }
    const matches = salaryString.match(/\$([0-9,]+)/g);
    if (matches && matches.length > 0) {
      return parseInt(matches[0].replace(/[^0-9]/g, ''));
    }
    return parseInt(salaryString.replace(/[^0-9]/g, ''));
  };

  const clearFilters = () => {
    setSearch('');
    setLocationFilter('All');
    setTypeFilter('All');
    setCompanyFilter('All');
    setSalaryFilter('All');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Job
          </h1>
          <p className="text-xl text-gray-600">
            Discover opportunities that match your skills and preferences
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search jobs by title, company, or keywords..."
              className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={locationFilter}
                onChange={e => setLocationFilter(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Company Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <select
                value={companyFilter}
                onChange={e => setCompanyFilter(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {companies.map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
            </div>

            {/* Salary Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary Range
              </label>
              <select
                value={salaryFilter}
                onChange={e => setSalaryFilter(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="All">All Salaries</option>
                <option value="under-80k">Under $80k</option>
                <option value="80k-100k">$80k - $100k</option>
                <option value="over-100k">Over $100k</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="newest">Newest First</option>
                <option value="salary-high">Salary: High to Low</option>
                <option value="salary-low">Salary: Low to High</option>
                <option value="company">Company Name</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium text-gray-700 mr-2">Quick Filters:</span>
            <button
              onClick={() => setTypeFilter('Full-Time')}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition"
            >
              💼 Full-Time
            </button>
            <button
              onClick={() => setTypeFilter('Part-Time')}
              className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm hover:bg-yellow-200 transition"
            >
              ⏱️ Part-Time
            </button>
            <button
              onClick={() => setTypeFilter('Freelance')}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition"
            >
              🎯 Freelance
            </button>
            <button
              onClick={() => setLocationFilter('Remote')}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
            >
              🏠 Remote
            </button>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-between items-center">
            <button
              onClick={clearFilters}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Clear All Filters
            </button>
            
            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {sortedJobs.length} of {allJobs.length} jobs
            </div>
          </div>
        </div>

        {/* Job Cards */}
        {sortedJobs.length > 0 ? (
          <div className="grid gap-6">
            {sortedJobs.map(job => (
              <Jobcarddesign key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <button 
              onClick={clearFilters}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mainjob;