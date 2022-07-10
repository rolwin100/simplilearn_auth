import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Signup from 'views/Auth/Signup';
import Login from 'views/Auth/Login';
import NotFound404 from 'views/NotFound404';
import Home from 'views/Home';

const AppRoutes:React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/404" element={<NotFound404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
