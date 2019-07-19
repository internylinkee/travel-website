import React from 'react';
import messages from 'constants/messages';
import { Empty } from 'antd';

export default function errorSystem() {
  return (
    <Empty
      description={messages.ERROR_SYSTEM}
      image="/images/error.png"
    />
  );
}

errorSystem.displayName = 'ErrorSystem';
