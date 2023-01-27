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
    subtitle1: {
      fontSize: 12,
      fontStyle: 'italic'
    },
    h6: {
      fontSize: 14,
    }

  },
  shape: {
    borderRadius: 20,
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
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
