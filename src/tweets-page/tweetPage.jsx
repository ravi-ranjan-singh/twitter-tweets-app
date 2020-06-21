import React from 'react';
import TopBar from './../top-bar/topbar';
import TweetContainer from './../tweets-container/tweetContainer';
import './tweetPage.css';

const TweetsPage = (props) => {
  return (
    <div className="TweetPage">
      <TopBar routeData={props}></TopBar>
      <TweetContainer></TweetContainer>
    </div>
  );
};

export default TweetsPage;
