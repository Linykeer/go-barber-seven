import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from '../src/styles/global';

import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App;
