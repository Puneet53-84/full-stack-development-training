// src/index.js
import React from 'react';
// importing react dom module
import ReactDOM from 'react-dom/client';
import App from './App';
// creating react dom which use to connect/render our component on browser
const root = ReactDOM.createRoot(document.getElementById('root'));
// render component
root.render(<App />)