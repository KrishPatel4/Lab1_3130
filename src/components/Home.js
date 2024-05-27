import React from 'react'
import { useState, useEffect } from 'react';

const Home = () =>{
  useEffect(() => {
    const visit = localStorage.getItem('visits');
    if (!visit) {
        localStorage.setItem('visits', 1);
    }
    localStorage.setItem('visits', parseInt(visit) + 1);
  }, []);

  return (
    <div>
      <p>Your Banner ID: B00916694</p>
    </div>
  );
}

export default Home;