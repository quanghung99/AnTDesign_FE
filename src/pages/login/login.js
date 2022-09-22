import { Button, Form } from 'antd';
import React from 'react';
import FormCheckbox from '../../components/form/form_checkbox/form_checkbox';
import FormInput from '../../components/form/form_input/form_input';
import FormCommon from '../../components/form/form_input/form_input';

const LoginPage = () => {
  const onFinish = () => {};
  return (
    <div className="LoginPage">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormInput
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        />
        <FormInput
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        />
        <FormCheckbox
          name="remember me"
          valuePropName="checked"
          children="Remember me"
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
