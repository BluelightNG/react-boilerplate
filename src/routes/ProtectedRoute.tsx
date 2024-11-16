import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = true; // Your auth state can come from anywhere
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
