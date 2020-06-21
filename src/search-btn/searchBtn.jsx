import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTweets, setLoadFalse, setLoadTrue } from './../redux/actions';
import axios from 'axios';
import './searchBtn.css';

const getTweets = async (query, usersList, dispatch, routeData) => {
  if (!query.startsWith('#')) {
    const screen_name = usersList.filter((user) => user.name === query)[0]
      .screen_name;
    if (screen_name) {
      routeData.history.push('/tweets');
      try {
        dispatch(setLoadTrue());
        const response = await axios.get(
          `https://twitter-tweets-api.herokuapp.com/tweets/${screen_name}`
        );
        const tweets = response.data.tweets;
        dispatch(setTweets(tweets));
        dispatch(setLoadFalse());
      } catch (error) {
        dispatch(setLoadFalse());
        console.log(error);
      }
    } else {
      console.log('no user found');
    }
  } else {
    routeData.history.push('/tweets');
    try {
      dispatch(setLoadTrue());
      query = query.slice(1, query.length - 1);
      const response = await axios.get(
        `https://twitter-tweets-api.herokuapp.com/tweetsbytags/${query}`
      );
      const tweets = response.data.tweets;
      dispatch(setTweets(tweets));
      dispatch(setLoadFalse());
    } catch (error) {
      dispatch(setLoadFalse());
      console.log(error);
    }
  }
};

const SearchButton = ({ routeData }) => {
  const query = useSelector((state) => state.seachQuery);
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <button
      className="search"
      onClick={() => {
        getTweets(query, usersList, dispatch, routeData);
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
