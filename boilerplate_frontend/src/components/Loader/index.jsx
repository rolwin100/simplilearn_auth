import React from 'react';
import { Spin } from 'antd';

const Loader = () => (
  <div style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  >
    <Spin tip="Loading..." />
  </div>
);

export default Loader;
