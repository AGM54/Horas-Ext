import { Navigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import type { RootState } from '~/store';
import { useState, useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  
  // Debug info on mount
  useEffect(() => {
    console.log(`ProtectedRoute at ${location.pathname}, auth state:`, isAuthenticated);
    setChecked(true);
  }, [isAuthenticated, location.pathname]);


  // Only check auth after the state has been checked to prevent flashes
  if (!checked) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log(`Redirecting to login from ${location.pathname}`);
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
} 