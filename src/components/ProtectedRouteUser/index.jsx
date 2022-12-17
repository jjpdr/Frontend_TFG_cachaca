import { Navigate, Outlet } from "react-router";
import { useParams } from "react-router-dom";

const checkUser = (userId, profileId) => {
  return userId === profileId ? true : false;
};

export default function ProtectedRouteUser() {
  const { id } = useParams();
  const userId = localStorage.getItem("userID");
  return checkUser(userId, id) ? <Outlet /> : <Navigate to="/" />;
}
