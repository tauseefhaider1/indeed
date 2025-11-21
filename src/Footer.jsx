import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Browse Jobs</a></li>
            <li><a href="#" className="hover:underline">Salary Guide</a></li>
            <li><a href="#" className="hover:underline">Upload Resume</a></li>
            <li><a href="#" className="hover:underline">Job Alerts</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Employers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Post a Job</a></li>
            <li><a href="#" className="hover:underline">Employer Dashboard</a></li>
            <li><a href="#" className="hover:underline">Hiring Advice</a></li>
            <li><a href="#" className="hover:underline">Plans & Pricing</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-600">🌐</a>
            <a href="#" className="hover:text-blue-600">🔵</a>
            <a href="#" className="hover:text-blue-600">▶️</a>
            <a href="#" className="hover:text-blue-600">📸</a>
          </div>
        </div>

      </div>

      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
        © 2025 Indeed Clone • All rights reserved.
      </div>
    </footer>
  );
}
