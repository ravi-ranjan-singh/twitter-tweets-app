import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setUserSelected } from './../redux/actions';
import UserLoader from './../loader/loader2';

const UserList = ({ users, height }) => {
  const dispatch = useDispatch();
  const loadingUserList = useSelector((state) => state.loading_userList);
  return (
    <div className="user-list" style={{ height }}>
      {loadingUserList ? (
        <UserLoader></UserLoader>
      ) : (
        <ul>
          {users.map((user) => (
            <li
              key={user.screen_name}
              onClick={() => {
                dispatch(setSearchQuery(user.name));
                dispatch(setUserSelected(true));
                document.querySelector('.input-field').value = user.name;
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
