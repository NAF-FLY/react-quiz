import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Footer />
    <App />
  </React.StrictMode>,
);