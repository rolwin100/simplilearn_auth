import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  LogoutOutlined,
  FileExclamationOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import HeaderDropdown from 'components/HeaderDropdown';
import { logout } from 'utils/auth';
import style from './header.module.less';
import SideBar from '../SideBar';

const { Header, Content } = Layout;


const menuHeaderDropdown = (
  <Menu className={style.menu} selectedKeys={[]}>
    <Menu.Item key="center">
      <LogoutOutlined />
      My profile
    </Menu.Item>
    <Menu.Item key="center">
      <FileExclamationOutlined />
      Create Ticket
    </Menu.Item>
    <Menu.Item key="center" onClick={logout}>
      <UserOutlined />
      Logout
    </Menu.Item>
  </Menu>
);
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout className={style.siderBarLayout} style={{ minHeight: '100vh' }}>
        <SideBar collapsed={collapsed} />
        <Layout>
          <Header className={`${style.siteLayoutBackground} ${style.header}`}>
            <MenuOutlined
              className={style.trigger}
              onClick={this.toggle}
            />
            <div className={style.right}>
              <HeaderDropdown overlay={menuHeaderDropdown}>
                <div className={style.action}>
                  <Avatar className={`${style.avatar}`}>RM</Avatar>
                </div>
              </HeaderDropdown>
            </div>
          </Header>
          <Content
            className={style.siteLayoutBackground}
            style={{
              margin: '24px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Home;
