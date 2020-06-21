import React from 'react';
import Brand from './../brand/brand';
import Input from './../input/input';
import SearchButton from './../search-btn/searchBtn';
import './main.css';
const Main = (props) => {
  return (
    <div className="main">
      <Brand></Brand>
      <Input></Input>
      <SearchButton routeData={props} />
    </div>
  );
};

export default Main;
