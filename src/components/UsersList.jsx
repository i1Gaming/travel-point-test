import React from "react";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  return (
    <div className="users">
      <h1 className="users__title">Список Користувачів</h1>
      <ul className="users__list">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
