import React from 'react';
import Brand from './../brand/brand';
import Input from './../input/input';
import SearchButton from './../search-btn/searchBtn';
import './topbar.css';

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <Brand></Brand>
      <Input></Input>
      <div>
        <SearchButton routeData={props.routeData}></SearchButton>
      </div>
    </div>
  );
};

export default TopBar;
