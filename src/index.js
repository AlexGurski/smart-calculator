import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/global.css'
import Calculator from './calculator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);


