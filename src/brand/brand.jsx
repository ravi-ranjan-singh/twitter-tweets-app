import React from 'react';
import { Link } from 'react-router-dom';
import './brand.css';

const Brand = () => {
  return (
    <React.Fragment>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h1>
          <span>TWEET</span>
          <i className="fa fa-twitter" aria-hidden="true"></i>{' '}
          <span>SEARCH</span>
        </h1>
      </Link>
    </React.Fragment>
  );
};

export default Brand;
