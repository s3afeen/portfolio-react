import React from 'react';
import bauImage from '../assets/bau-removebg-preview.png'; 

const Education = () => {
  return (
    <section className="Education" id="Education">
      <h2 className="title">Education</h2>
      <div className="edu-card">
        <img src={bauImage} alt="Al-Balqa University" />
        <div className="edu-info">
          <h3>Al-Balqa University</h3>
          <p>Information security, networks</p>
          <p>2022 to 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
