import React from 'react';
import img from './../assets/loader.gif';
import './loader.css';
const Loader = () => {
  return (
    <div className="loading">
      <img src={img} alt="" />
    </div>
  );
};

export default Loader;
