import React from 'react';
import img from './../assets/loader2.gif';
import './loader2.css';

const UserLoader = () => {
  return (
    <div className="loading2">
      <img src={img} alt="" />
    </div>
  );
};

export default UserLoader;
