import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InternalLoginPage from '../Customer/Login/InternalLoginPage';

const AdminPrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userRole = sessionStorage.getItem('userRole');

    if (token && userRole === '4') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      toast.warn('Please log in to continue.', { autoClose: 1300 });
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <>
        <div
          className="modal fade show"
          id="internalLoginModal"
          tabIndex="-1"
          aria-labelledby="internalLoginModalLabel"
          aria-hidden="true"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <InternalLoginPage />
        </div>
      </>
    );
  }

  return <Outlet />;
};

export default AdminPrivateRoute;
