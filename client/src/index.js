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
import ReactGA from 'react-ga4';

const TESTING_TRACKING_ID = 'G-L9SZ5RVC03';
const HOT_TRACKING_ID = 'G-54K5616D7P';
ReactGA.initialize(process.env.NODE_ENV === 'development' ? TESTING_TRACKING_ID : HOT_TRACKING_ID);
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
