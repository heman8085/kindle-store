import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AmazonProvider } from './components/store/AmazonContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AmazonProvider>
      <App />
    </AmazonProvider>
  </React.StrictMode>
);


