import React from 'react';
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import ErrorBoundary from './errorBoundary/ErrorBoundary';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>
)