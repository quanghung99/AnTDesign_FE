import { Checkbox, Form } from 'antd';
import React from 'react';

const FormCheckbox = ({ name, valuePropName, children }) => {
  return (
    <Form.Item name={name} valuePropName={valuePropName}>
      <Checkbox>{children}</Checkbox>
    </Form.Item>
  );
};

export default FormCheckbox;
