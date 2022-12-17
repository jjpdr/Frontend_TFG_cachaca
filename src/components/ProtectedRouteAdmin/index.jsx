import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../context/User";
import { useState } from "react";

const checkAdmin = (string) => {
  return string === "true" ? true : false;
};

export default function ProtectedRoute() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  return checkAdmin(isAdmin) ? <Outlet /> : <Navigate to="/" />;
}
