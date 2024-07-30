import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Switch } from "../../components/ui/switch";

const HeaderThemeComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="flex items-center">
      <FaMoon className={isDarkMode ? 'text-blue-400' : 'text-gray-500'} />
      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
      />
      <FaSun className={isDarkMode ? 'text-gray-500' : 'text-yellow-400'} />

    </div>
  );
};

export default HeaderThemeComponent;
