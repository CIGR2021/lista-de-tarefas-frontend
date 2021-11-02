import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/MyApp';
import Provider from './context/Provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
    document.getElementById('root')
);
