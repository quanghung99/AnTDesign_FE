import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <I18nextProvider i18n={i18n}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </I18nextProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
