/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import {
  Form, Input, Button, Row, Card, Col, Typography, Checkbox,
} from 'antd';
import { connect } from 'react-redux';
import {
  UserOutlined, LockOutlined, MailOutlined, LeftCircleOutlined,
} from '@ant-design/icons';

import { getSignup } from 'views/SignUp/actions';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Login = (props) => {
  // eslint-disable-next-line no-shadow
  const { getSignup } = props;
  useEffect(() => localStorage.clear(), []);
  const onFinish = (values) => {
    getSignup(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row type="flex" justify="center" align="middle" className="authForm" style={{ minHeight: '100vh' }}>
      <Col md={6} xs={18} lg={6} sm={12}>
        <Card className="authCardBorder">
          <Title level={4}>Signup</Title>
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
              name="email"
              rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
          {props.signup.error && <p style={{ color: 'red' }}>Credentials invalid</p>}

          <Link to="/login" className="contentCenter">
            <LeftCircleOutlined style={{ fontSize: '1.5rem' }} />
            {' '}
            &nbsp; Go Back
          </Link>
        </Card>
      </Col>
    </Row>
  );
};

function mapStateToProps(state) {
  return {
    signup: state.signup,
  };
}

export default connect(mapStateToProps, { getSignup })(Login);
