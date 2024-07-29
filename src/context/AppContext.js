import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: null
  });

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
