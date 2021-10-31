import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './context/provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
    document.getElementById('root')
);
