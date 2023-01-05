import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./StoreDatabase/index"
import "./styles/normalise.css"
import "./styles/styles.css";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './ChatProject';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(0, 0, 0, 0.5)',
    },
    secondary: {
      main: '#00FFFF',
    },
    text: {
      primary: '#00ffff',
      secondary: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Rubik Mono One',
    },
  },
  shape: {
    borderRadius: 20,
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
