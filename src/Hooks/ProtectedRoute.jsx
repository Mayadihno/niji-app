import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "./UserAuth";

const ProtectedRoute = () => {
  const { loading, loggedIn } = UseAuth();
  if (loading) {
    return "Loading....";
  }
  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
