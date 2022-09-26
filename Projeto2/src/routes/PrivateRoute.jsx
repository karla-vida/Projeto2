import { useAuth } from "../contexts";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const { authenticated } = useAuth();

  console.log("Auth" + authenticated);
  if (!authenticated) {
    return <Navigate to="/Login"></Navigate>;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
