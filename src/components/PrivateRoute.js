import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
