import React from 'react'; import ReactDOM from 'react-dom/client'; 
import './index.css'; import App from './App'; 

import { BrowserRouter } from 'react-router-dom'; 
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><ErrorBoundary><App /></ErrorBoundary></BrowserRouter>);

