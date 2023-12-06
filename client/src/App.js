import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import History from './pages/history/history';
import NavBar from './pages/components/navBar';
import Future from './pages/future/future';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="future" element={<Future />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
