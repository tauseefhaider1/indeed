import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); // ✅ FIXED: Removed extra 't'

  if (loading) return <h1>Loading...</h1>;

  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;