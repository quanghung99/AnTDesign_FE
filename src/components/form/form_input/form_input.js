import React from 'react';
import { Form, Input } from 'antd';
const FormInput = ({ label, name, rules }) => {
  return (
    <>
      {name === 'username' && (
        <Form.Item label={label} name={name} rules={rules}>
          <Input />
        </Form.Item>
      )}
      {name === 'password' && (
        <Form.Item label={label} name={name} rules={rules}>
          <Input.Password />
        </Form.Item>
      )}
    </>
  );
};

export default FormInput;
