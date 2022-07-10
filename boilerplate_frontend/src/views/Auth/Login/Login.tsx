import React, { useEffect } from 'react';
import {
  Form, Input, Button, Row, Card, Col, Checkbox, Typography,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

const { Title } = Typography;

const Login:React.FC = () => {
  useEffect(() => localStorage.clear(), []);

  const onFinish = () => {

  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" align="middle" className="authForm" style={{ minHeight: '100vh' }}>
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

          <Link to="/auth/signup">Signup?</Link>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
