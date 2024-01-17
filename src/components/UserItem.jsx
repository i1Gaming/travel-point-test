import React from "react";
import { useNavigate } from "react-router-dom";

const UserItem = ({ user }) => {
  const router = useNavigate();
  return (
    <li className="user__item item">
      <span className="item__name">{user.name}</span>

      <span className="item__email">{user.email}</span>

      <button className="item__btn" onClick={() => router(`/user/${user.id}`)}>
        Деталі
      </button>
    </li>
  );
};

export default UserItem;
