import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import History from './pages/history/history';
import Connect from './pages/connect/connect';
import Portfolio from './pages/portfolio/portfolio';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="connect" element={<Connect />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default App;
