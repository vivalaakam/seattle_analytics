import './body.css';
import 'antd/dist/antd.css';
import React from 'react';
import '@ant-design/compatible';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import Header from './components/Header';
import WebSocketTransport from '@cubejs-client/ws-transport';
const API_URL = 'http://localhost:4000';
const CUBEJS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDk1MTI5OTUsImV4cCI6MTY0OTU5OTM5NX0.g7B1C9dC1PtRQFoy8sUceK7VCaM-fn8CvON7TxjeC8s';
const cubejsApi = cubejs({
  transport: new WebSocketTransport({
    authorization: CUBEJS_TOKEN,
    apiUrl: API_URL.replace('http', 'ws'),
  }),
});

const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: '100%',
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>
);

export default App;
