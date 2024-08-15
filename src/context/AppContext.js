import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  // Initialize 'theme' directly from local storage or default to 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [chosenColor, setChosenColor] = useState(() => localStorage.getItem('chosenColor') || '#8338ec');
  // Initialize 'userTheme' from local storage or default to 'system'
  const [userTheme, setUserTheme] = useState(() => localStorage.getItem('userTheme') || theme);
  // For filters related to job posts
  const [minSalaryFilter, setMinSalaryFilter] = useState(() => localStorage.getItem('minSalaryFilter') || 0);
  const [batchFilter, setBatchFilter] = useState(() => localStorage.getItem('batchFilter') || 'Any');

  // Fetch user data from an API
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

  // Save the theme and chosen color to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('chosenColor', chosenColor);
  }, [chosenColor]);

  useEffect(() => {
    localStorage.setItem('minSalaryFilter', minSalaryFilter);
  }, [minSalaryFilter]);

  useEffect(() => {
    localStorage.setItem('batchFilter', batchFilter);
  }, [batchFilter]);

  // Respond to changes in 'userTheme' and adjust 'theme' accordingly
  useEffect(() => {
    localStorage.setItem('userTheme', userTheme);
    const handleSystemThemeChange = (e) => {
      if (userTheme === 'system') {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setTheme(newSystemTheme);
      }
    };

    if (userTheme === 'system') {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDarkMode ? 'dark' : 'light';
      setTheme(systemTheme);
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      matchMedia.addListener(handleSystemThemeChange);

      return () => {
        matchMedia.removeListener(handleSystemThemeChange);
      };
    } else {
      setTheme(userTheme);
    }
  }, [userTheme]);

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    if (userTheme === 'system') {
      setUserTheme(theme === 'light' ? 'dark' : 'light');
    } else if (userTheme === 'light') {
      setUserTheme('dark');
    } else {
      setUserTheme('light');
    }
  };

  const resetSettings = () => {
    setUserTheme('system');
    setMinSalaryFilter(0);
    setBatchFilter('Any');
    setChosenColor('#8338ec');
  }

  // Prepare context value with useMemo to optimize performance
  const value = useMemo(() => ({
    isLoading,
    userData,
    theme,
    chosenColor,
    setUserData,
    setTheme,
    setChosenColor,
    toggleTheme,
    userTheme,
    setUserTheme,
    minSalaryFilter,
    setMinSalaryFilter,
    batchFilter,
    setBatchFilter,
    resetSettings
  }), [isLoading, userData, theme, chosenColor, userTheme, minSalaryFilter, batchFilter]);

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
