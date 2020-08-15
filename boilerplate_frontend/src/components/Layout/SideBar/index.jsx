import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UsergroupAddOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import style from './sidebar.module.less';

const { Sider } = Layout;

const SideBar = ({ collapsed }) => (
  <Sider className="sidebar" theme="light" trigger={null} collapsible collapsed={collapsed}>
    <div className={style.logo} />
    <Menu mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
        Users
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        Tutorials
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        Documents
      </Menu.Item>
    </Menu>
  </Sider>
);

SideBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};
export default SideBar;
