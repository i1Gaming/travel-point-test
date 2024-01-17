import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [errStatus, setErrStatus] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErrStatus(true);
        setErrMessage(err.message);
      });
  }, [id]);
  return (
    <div className="main wrapper">
      {user ? (
        <UserDetails user={user} />
      ) : errStatus ? (
        <div>
          <h1 className="error__title">{errMessage}</h1>
        </div>
      ) : (
        <div className="loader">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
