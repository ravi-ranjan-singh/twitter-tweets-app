export const setTweets = (tweets) => {
  return {
    type: 'SET_TWEETS',
    payload: tweets,
  };
};

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users,
  };
};

export const setSearchQuery = (query) => {
  return {
    type: 'SET_SEARCH',
    payload: query,
  };
};

export const setLoadTrue = () => {
  return {
    type: 'SET_LOAD_TRUE',
  };
};

export const setLoadFalse = () => {
  return {
    type: 'SET_LOAD_FALSE',
  };
};

export const setUserSelected = (val) => {
  return {
    type: 'SET_USER_SELECTED',
    payload: val,
  };
};

export const setUserLoader = (val) => {
  return {
    type: 'SET_LOAD_USERS',
    payload: val,
  };
};
