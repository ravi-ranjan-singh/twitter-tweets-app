import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  setUsers,
  setUserSelected,
  setUserLoader,
} from './../redux/actions';
import axios, { CancelToken } from 'axios';
import UserList from './../user-list/userList';
import './input.css';

let cancelRequest;

const setUserList = async (value, dispatch) => {
  if (!value.startsWith('#')) {
    if (value.length % 3 === 0) {
      cancelRequest && cancelRequest();
      try {
        dispatch(setUserLoader(true));
        const data = await axios.get(
          `https://twitter-tweets-api.herokuapp.com/users`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
            params: {
              name: value,
            },
            cancelToken: new CancelToken(function executor(c) {
              cancelRequest = c;
            }),
          }
        );
        dispatch(setUserLoader(false));
        const users = data.data.persons;
        dispatch(setUsers(users));
      } catch (error) {
        dispatch(setUserLoader(false));
        console.log(error);
      }
    }
  } else {
    dispatch(setUsers([]));
    dispatch(setUserLoader(false));
  }
};

const Input = () => {
  const value = useSelector((state) => state.seachQuery);
  const userSelected = useSelector((state) => state.userSelected);
  const users = useSelector((state) => state.users);
  const height = userSelected ? 0 : 200;
  const dispatch = useDispatch();
  return (
    <div className="inputbox">
      <input
        className="input-field"
        type="text"
        value={value} //" "
        onChange={(e) => {
          dispatch(setUserSelected(false));
          dispatch(setSearchQuery(e.target.value));
          setUserList(e.target.value, dispatch);
        }}
      />
      {users.length > 0 ? <UserList users={users} height={height} /> : null}
    </div>
  );
};

export default Input;
