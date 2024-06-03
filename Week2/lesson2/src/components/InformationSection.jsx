import React from 'react';
import '../css/InformationSection.css';

const InformationSection = () => {
  return (
    <div className="information-section">
      <div className="main-text">
        <h1>Get the right information to the right person at the right time.</h1>
      </div>
      <div className="info-cards">
        <div className="info-card">
          <h2>For Leaders</h2>
          <p>
            Set goals, forecast the impact of policy or practice changes, and track their outcomes across your agency.
          </p>
        </div>
        <div className="info-card">
          <h2>For Line Staff</h2>
          <p>
            Track probation and parole outcomes, see what’s leading to success, and reduce recidivism with our case management system.
          </p>
        </div>
        <div className="info-card">
          <h2>For the Public</h2>
          <p>
            Use open source code, public data, interactive tools, and data visualizations to understand the state of incarceration, promote accountability, and conduct research.
          </p>
        </div>
        <div className="info-card">
          <h2>For Policymakers and Advocates</h2>
          <p>
            Project the impact of policies on carceral, fiscal, and community outcomes. Understand where disparities begin, where they grow, and whether a policy is likely to increase or reduce them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
