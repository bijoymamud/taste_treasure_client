import { useContext } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLoaderData();


  if (loading) {
    return <span className="loading items-center pt-[900px] mb-[200px] loading-bars loading-lg flex mx-auto justify-center"></span>


  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />

};

export default PrivateRoute;