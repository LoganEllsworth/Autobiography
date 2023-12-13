import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppStore = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={isMobile}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  return useContext(AppContext);
};