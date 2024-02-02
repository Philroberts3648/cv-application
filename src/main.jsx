import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ComponentContainer from './components/ComponentContainer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <ComponentContainer />
  </React.StrictMode>,
)
