import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  // State for tracking whether the data is loading
  const [isLoading, setIsLoading] = useState(true);
  // State for storing user data fetched from API
  const [userData, setUserData] = useState(null);
  // State for managing the theme, initializing from local storage or default to 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  // State for managing user's chosen color
  const [chosenColor, setChosenColor] = useState(() => localStorage.getItem('color') || 'blue');

  // Effect to fetch user data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://placify-backend.vercel.app/api/posts/');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Effect to save the theme to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effect to save the chosen color to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('color', chosenColor);
  }, [chosenColor]);

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Prepare context value with useMemo to optimize performance
  const value = useMemo(() => ({
    isLoading,
    userData,
    theme,
    chosenColor,
    setUserData,
    setTheme,
    setChosenColor,
    toggleTheme
  }), [isLoading, userData, theme, chosenColor]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
