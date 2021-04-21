import React, { useState } from 'react';

const DefaultNavBar = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  return (
    <div className="navbar-nav">
      <a href="#" className="nav-item nav-link active">Home</a>
      <a href="#" className="nav-item nav-link">Services</a>
      <a href="#" className="nav-item nav-link">About</a>
      <a href="#" className="nav-item nav-link">Contact</a>
    </div>
  )
};

export default DefaultNavBar;