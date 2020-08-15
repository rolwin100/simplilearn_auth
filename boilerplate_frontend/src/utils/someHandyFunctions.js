/* eslint-disable import/prefer-default-export */
export const layoutVisibilityCheck = (pathname) => {
  let showLayout = true;
  if (pathname && (pathname === '/signup' || pathname === '/login' || pathname === '/404')) {
    showLayout = false;
  }
  return showLayout;
};
