import React, { useState } from 'react';
import { jobs } from './Jobar'; // make sure path is correct
import Jobcarddesign from './Jobcarddesign';

const Ins = () => {
  const [inp1, setInp1] = useState('');

  const handleInp1 = (e) => {
    setInp1(e.target.value);
  };

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(inp1.toLowerCase())
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <input
        type="text"
        value={inp1}
        onChange={handleInp1}
        placeholder="Search jobs..."
        className="border p-2 mb-4 w-full rounded"
      />

      {filtered.length > 0 ? (
        filtered.map(job => <Jobcarddesign key={job.id} job={job} />)
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default Ins;
