import React from 'react';
import type { FC } from 'react';
import { Button, ConfigProvider } from 'antd';

import 'antd/dist/reset.css';

const App: FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}>
    <Button type='primary'>Button</Button>
  </ConfigProvider>
);

export default App;
