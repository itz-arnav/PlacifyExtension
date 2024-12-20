import React from 'react';
import css from "../../styles/Settings/SettingsThemeSelector.module.css";
import { useAppContext } from "../../context/AppContext";
import { FaCheck } from "react-icons/fa";

const SettingsThemeSelector = () => {
  const { currentTheme, highlightColor, themePreference, setThemePreference } = useAppContext(); // Updated variable names

  const handleThemeChange = (newTheme) => {
    setThemePreference(newTheme);
  };

  const themes = [
    { id: 'system', label: 'System', image: 'system.png' },
    { id: 'light', label: 'Light', image: 'light.png' },
    { id: 'dark', label: 'Dark', image: 'dark.png' },
  ];

  return (
    <div>
      <h3 className={`${css.titleHeader} ${currentTheme === 'dark' ? css.themeDark : ''}`}>Interface Theme</h3>
      <p className={css.subtitleHeader}>Select or customize your UI theme.</p>
      <div className={css.themeImageWrapper} style={{ '--accent-color': highlightColor }}>
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={css.imageContainer}
            onClick={() => handleThemeChange(theme.id)}
          >
            <img
              src={theme.image}
              alt={theme.label}
              className={`${css.themeImage} ${themePreference === theme.id ? css.checked : ''}`}
            />
            <div className={css.imageDescContainer}>
              <div className={`${css.selectRadio} ${themePreference === theme.id ? css.radioChecked : ''}`}>
                <FaCheck className={`${css.checkIcon} ${themePreference === theme.id ? css.iconChecked : ''}`} />
              </div>
              <div className={css.selectText}>{theme.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsThemeSelector;
