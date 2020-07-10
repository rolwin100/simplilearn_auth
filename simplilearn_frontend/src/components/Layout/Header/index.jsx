import React from 'react';
import { PageHeader, Button } from 'antd';
import { logout } from 'utils/auth';

const style = {
  sitePageHeader: {
    border: '1px solid rgb(235, 237, 240)',

  },
};
export default () => (
  <PageHeader
    className={style.sitePageHeader}
    onBack={() => null}
    title="simplilearn"
    extra={[
      <Button key="1" onClick={logout}>Logout</Button>,
    ]}
  />
);
