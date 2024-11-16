import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = true;

  return !isAuthenticated ? children : <Navigate to={window.history.back() as any} />;
};

export default PublicRoute;
