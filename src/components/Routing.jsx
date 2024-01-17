import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserDetailPage from "../pages/UserDetailPage";
import ErrorPage from "../pages/ErrorPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
