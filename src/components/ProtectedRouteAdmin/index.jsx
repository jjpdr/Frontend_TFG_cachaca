import { Navigate, Outlet } from "react-router";
import { useState } from "react";

const checkAdmin = (string) => {
  return string === "true" ? true : false;
};

export default function ProtectedRoute() {
  //eslint-disable-next-line
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  return checkAdmin(isAdmin) ? <Outlet /> : <Navigate to="/" />;
}
