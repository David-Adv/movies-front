import React from 'react'
import { Navigate } from 'react-router'

export   const ProtectedRoute = ({ children, isAuthenticated }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
      };
      


export default ProtectedRoute
