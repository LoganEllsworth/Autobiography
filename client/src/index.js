import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline, responsiveFontSizes } from '@mui/material';
import { AppStore } from './appStore';
import ScrollToTop from './pages/components/scrollToTop';
import Nav from './pages/components/nav';
import Footer from './pages/components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <AppStore>
        <BrowserRouter>
          <CssBaseline />
          <ScrollToTop />
          <Nav />
          <App />
          <Footer />
        </BrowserRouter>
      </AppStore>
    </ThemeProvider>
  </React.StrictMode>
);
