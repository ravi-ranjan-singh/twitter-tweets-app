import React from 'react';
import Card from './../tweet-cards/tweetCard';
import { useSelector } from 'react-redux';
import './tweetContainer.css';
import Loader from './../loader/loader';

const TweetContaine = () => {
  const tweets = useSelector((state) => state.tweets);
  const loading = useSelector((state) => state.loading);
  let count = 0;
  return loading ? (
    <Loader />
  ) : (
    <div className="tweets-container">
      {tweets.map((tweet) => (
        <Card data={tweet} key={count++}></Card>
      ))}
    </div>
  );
};

export default TweetContaine;
