import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div className="content-container">
      <div className="content-container__title">
        Page Not Found
      </div>
      <div>
       The page you are trying to access does not exist, please return <Link to="/">home</Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
