import React from 'react';
import { Spin } from 'antd';

export default function loading() {
  return (
    <div className="b-loading">
      <Spin size="large" />
    </div>
  );
}

loading.displayName = 'Loading';
