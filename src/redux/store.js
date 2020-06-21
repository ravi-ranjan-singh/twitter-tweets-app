import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

const tweetReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TWEETS':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOAD_TRUE':
      state = true;
      break;
    case 'SET_LOAD_FALSE':
      state = false;
      break;
    default:
      break;
  }
  return state;
};

const userListLoader = (state = false, { type, payload }) => {
  switch (type) {
    case 'SET_LOAD_USERS':
      state = payload;
      break;
    default:
      break;
  }
  return state;
};

const setSeachQueryReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

const setUserSelectedReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_USER_SELECTED':
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  tweets: tweetReducer,
  users: userReducer,
  loading: loadingReducer,
  seachQuery: setSeachQueryReducer,
  userSelected: setUserSelectedReducer,
  loading_userList: userListLoader,
});

const store = createStore(
  combinedReducers,
  {},
  composeEnhancers(applyMiddleware())
);

export default store;
