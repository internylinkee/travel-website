import React from 'react';
import messages from 'constants/messages';
import { Empty } from 'antd';

export default function noData() {
  return (
    <Empty description={messages.NO_DATA} />
  );
}

noData.displayName = 'NoData';
