/* global chrome */

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import sampleData from '../assets/sampleItemData';

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState(sampleData);
  const [filteredItems, setFilteredItems] = useState(items);

  const [currentTheme, setCurrentTheme] = useState('light');
  const [highlightColor, setHighlightColor] = useState('#8338ec');
  const [themePreference, setThemePreference] = useState('system');

  const [salaryThreshold, setSalaryThreshold] = useState(0);
  const [batchPreference, setBatchPreference] = useState('Any');
  const [itemCategory, setItemCategory] = useState('Job');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://placify-backend.vercel.app/api/posts/');
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setIsLoading(false);
        setItems(sampleData);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    chrome.storage.sync.get(['theme', 'chosenColor', 'themePreference', 'minSalaryFilter', 'batchFilter', 'itemTypeFilter', 'searchTermFilter'], (storedValues) => {
      setCurrentTheme(storedValues.theme || 'light');
      setHighlightColor(storedValues.chosenColor || '#8338ec');
      setThemePreference(storedValues.themePreference || 'system');
      setSalaryThreshold(storedValues.minSalaryFilter || 0);
      setBatchPreference(storedValues.batchFilter || 'Any');
      setItemCategory(storedValues.itemTypeFilter || 'Job');
      setSearchQuery(storedValues.searchTermFilter || '');
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.set({ theme: currentTheme });
  }, [currentTheme]);

  useEffect(() => {
    chrome.storage.sync.set({ chosenColor: highlightColor });
  }, [highlightColor]);

  useEffect(() => {
    chrome.storage.sync.set({ minSalaryFilter: salaryThreshold });
  }, [salaryThreshold]);

  useEffect(() => {
    chrome.storage.sync.set({ batchFilter: batchPreference });
  }, [batchPreference]);

  useEffect(() => {
    chrome.storage.sync.set({ itemTypeFilter: itemCategory });
  }, [itemCategory]);

  useEffect(() => {
    chrome.storage.sync.set({ searchTermFilter: searchQuery });
  }, [searchQuery]);

  useEffect(() => {
    chrome.storage.sync.set({ themePreference: themePreference });

    const handleSystemThemeChange = (e) => {
      if (themePreference === 'system') {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setCurrentTheme(newSystemTheme);
      }
    };

    if (themePreference === 'system') {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(prefersDarkMode.matches ? 'dark' : 'light');
      prefersDarkMode.addListener(handleSystemThemeChange);

      return () => {
        prefersDarkMode.removeListener(handleSystemThemeChange);
      };
    } else {
      setCurrentTheme(themePreference);
    }
  }, [themePreference]);

  const toggleTheme = useCallback(() => {
    if (themePreference === 'system') {
      setThemePreference(currentTheme === 'light' ? 'dark' : 'light');
    } else if (themePreference === 'light') {
      setThemePreference('dark');
    } else {
      setThemePreference('light');
    }
  }, [themePreference, currentTheme]);

  const resetPreferences = () => {
    setThemePreference('system');
    setSalaryThreshold(0);
    setBatchPreference('Any');
    setHighlightColor('#8338ec');
  };

  const updateFilteredItems = useCallback((searchTerm, category = itemCategory) => {
    if (!items || !Array.isArray(items)) return;

    const categoryFilteredItems = items.filter((item) => item.type === category);

    const filteredResults = categoryFilteredItems.filter((item) => {
      const title = (item.name || '').toLowerCase();
      const company = (item.company || '').toLowerCase();
      return (
        title.includes(searchTerm.toLowerCase()) ||
        company.includes(searchTerm.toLowerCase())
      );
    });

    setFilteredItems(filteredResults);
  }, [items, itemCategory]);

  const contextValue = useMemo(
    () => ({
      isLoading,
      items,
      currentTheme,
      highlightColor,
      setItems,
      setCurrentTheme,
      setHighlightColor,
      toggleTheme,
      themePreference,
      setThemePreference,
      salaryThreshold,
      setSalaryThreshold,
      batchPreference,
      setBatchPreference,
      resetPreferences,
      updateFilteredItems,
      filteredItems,
      itemCategory,
      setItemCategory,
      searchQuery,
      setSearchQuery,
    }),
    [
      isLoading,
      items,
      currentTheme,
      highlightColor,
      themePreference,
      salaryThreshold,
      batchPreference,
      filteredItems,
      itemCategory,
      searchQuery,
      toggleTheme,
      updateFilteredItems
    ]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
