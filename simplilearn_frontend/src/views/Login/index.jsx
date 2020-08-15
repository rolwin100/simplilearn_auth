/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import {
  Form, Input, Button, Row, Card, Col, Checkbox, Typography,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';

import { getLogin } from 'views/Login/actions';
import { Link } from 'react-router-dom';
// import style from './login.module.less';

const { Title } = Typography;

const Login = (props) => {
  // eslint-disable-next-line no-shadow
  const { getLogin } = props;
  useEffect(() => localStorage.clear(), []);
  const onFinish = (values) => {
    getLogin(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row type="flex" justify="center" align="middle" className="authForm" style={{ minHeight: '100vh' }}>
      <Col md={6} xs={18} lg={6} sm={12}>
        <Card className="authCardBorder">
          <Title level={4}>Login</Title>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>

          {props.auth.error && <p style={{ color: 'red' }}>Credentials invalid</p>}
          <Link to="/signup">Signup?</Link>
        </Card>
      </Col>
    </Row>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { getLogin })(Login);
