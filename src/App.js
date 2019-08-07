import React from 'react';

import './config/ReactotronConfig';

import createRouter from './routes';

// import { Container } from './styles';

export default function App() {
  const signed = false;
  const Routes = createRouter(signed);

  return <Routes />;
}
