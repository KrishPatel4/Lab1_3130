import React from 'react'
import { useState, useEffect } from 'react';
const About = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        const visit = localStorage.getItem('visits');
        const number = parseInt(visit);
        setVisits(number);
      }, []);
  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <p>Home page visited {visits} times</p>
    </div>
  )
}

export default About;