import { Button } from 'antd';
import React from 'react';

const ButtonCommon = ({ type, color, size, children }) => {
  return (
    <Button type={type} color={color} size={size}>
      {children}
    </Button>
  );
};

export default ButtonCommon;
