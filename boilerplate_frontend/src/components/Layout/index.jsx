/* eslint-disable react/prop-types */
import React from 'react';
import { layoutVisibilityCheck } from 'utils/someHandyFunctions';
import { useLocation } from 'react-router-dom';
import Header from './Header';

export default ({ children }) => {
  const { pathname } = useLocation();
  const showLayout = layoutVisibilityCheck(pathname);
  return (showLayout ? <Header>{children}</Header> : <>{children}</>);
};
