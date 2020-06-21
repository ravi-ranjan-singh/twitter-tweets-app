import React from 'react';
import './tweetCard.css';

const getDate = (date) => {
  return new Date(date).toDateString().split(' ').slice(1, 4).join(' ');
};

const getCount = (count) => {
  return count > 1000 ? `${(count / 1000).toFixed(1)}K` : count;
};

const getText = (data) => {
  const index = data.content.indexOf('http');
  if (index !== -1) {
    return data.content.slice(0, index);
  }
  return data.content;
};

const getLink = (data) => {
  const index = data.content.indexOf('http');
  if (index !== -1) {
    return data.content.slice(index, data.content.length);
  }
  return '';
};

const TweetCard = ({ data }) => {
  return (
    <div className="card">
      <div className="info">
        <div className="user">
          <img
            src={data.profile_img}
            alt="profile_img"
            className="profile-img"
          />
          <span className="name">
            <span>
              <b>{data.name}</b>
            </span>
            <br />
            <span style={{ fontSize: 11, color: 'rgb(126, 126, 126)' }}>
              @{data.screen_name}
            </span>
          </span>
        </div>

        <div className="date">{getDate(data.date)}</div>
      </div>
      <div className="tweet">
        <p>
          {getText(data)}
          <a href={getLink(data)} target="_blank" rel="noopener noreferrer">
            {getLink(data)}
          </a>
          {/* {data.content} */}
        </p>
      </div>
      <div className="e-info">
        <span className="comment">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          {getCount(data.favourites_count)}
        </span>
        <span className="retweet">
          <i className="fa fa-retweet" aria-hidden="true"></i>
          {getCount(data.retweet_count)}
        </span>
      </div>
    </div>
  );
};

export default TweetCard;
