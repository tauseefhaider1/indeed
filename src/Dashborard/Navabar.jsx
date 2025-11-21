import React from 'react';
import { Link } from 'react-router-dom';

const Navabar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/Dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/Signup">Signup</Link>
      </li>
    </ul>
  )
}

export default Navabar;
