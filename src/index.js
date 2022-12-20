import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from "react-redux";
import {store} from "./database/index"
import "./styles/styles2.css";
import "./styles/normalise.css"

import App from './ChatProject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store = {store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
