import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";
// import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h1>Loading...</h1>;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
