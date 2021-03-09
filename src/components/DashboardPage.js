import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <div className="navBar">
      <Link className="button" to='/practices/'>View Practices</Link>
      <Link className="button" to='/instruments/'>View Instruments</Link>
    </div>
    <div className="content-container">
      BLAH BLAH BLAH DASHBOARDasd
    </div>
  </div>
);

export default DashboardPage;
