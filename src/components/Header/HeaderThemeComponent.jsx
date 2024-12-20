import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Switch } from "../../components/ui/switch";
import { useAppContext } from "../../context/AppContext";
import css from "../../styles/Header/HeaderThemeComponent.module.css";

const HeaderThemeComponent = () => {
  const { currentTheme, toggleTheme } = useAppContext(); // Updated `theme` to `currentTheme`
  const isDarkMode = currentTheme === 'dark';

  return (
    <div className={`flex items-center ${css.themeComponentContainer}`}>
      {/* Sun icon for light mode */}
      <FaSun className={`${isDarkMode ? 'text-gray-500' : 'text-yellow-400'} ${css.themeIcon}`} />

      {/* Theme toggle switch */}
      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
      />

      {/* Moon icon for dark mode */}
      <FaMoon className={`${isDarkMode ? 'text-blue-400' : 'text-gray-500'} ${css.themeIcon}`} />
    </div>
  );
};

export default HeaderThemeComponent;
