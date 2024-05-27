import React from 'react'
import { useState, useEffect } from 'react';
const Contact = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        const visit = localStorage.getItem('visits');
        const number = parseInt(visit);
        setVisits(number);
      }, []);
  return (
    <div>
      <h1>Welcome to the Contact Page</h1>
      <p>Home page visited {visits} times</p>
    </div>
  )
}

export default Contact;