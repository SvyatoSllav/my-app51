import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css';
import App from './App';
import { createApiClient } from './utils/createApiClient'
import { useApiClient } from './hooks/useApiClient'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient()
const apiClient = createApiClient({
  baseURL: process.env['REACT_APP_BACKEND_URL'] + '/api/v1',
  token: window.Telegram.WebApp.initDataUnsafe.user?.id ?? process.env['REACT_APP_DEBUG_TOKEN'],
  ngrokSkipBrowserWarning: '69420'
})
const root = ReactDOM.createRoot(document.getElementById('root'));
const isFirstTime = window.localStorage.getItem('isFirstTime') === 'true'
window.localStorage.setItem('isFirstTime', false)

root.render(
  <React.StrictMode>
    <useApiClient.Provider apiClient={apiClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App isFirstTime={isFirstTime} />
        </BrowserRouter>
      </QueryClientProvider>
    </useApiClient.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
