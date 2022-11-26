import { Navigate } from "react-router-dom";

const ProtectedUser = ({ children }) => {
  const user = localStorage.getItem('userDetails')
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const ProtectedAdmin = ({ children }) => {
  const admin = localStorage.getItem('adminUserDetails')
  if (!admin) {
    return <Navigate to="/db" replace />;
  }
  return children;
};

const ProtectedRoutes = { ProtectedUser, ProtectedAdmin }

export default ProtectedRoutes;