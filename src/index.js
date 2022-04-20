import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/app/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

