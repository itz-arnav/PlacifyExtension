import React from 'react';
import css from "../../styles/Settings/SettingsThemeSelector.module.css";
import { useAppContext } from "../../context/AppContext";
import { FaCheck } from "react-icons/fa";

const SettingsThemeSelector = () => {
  const { theme, chosenColor, userTheme, setUserTheme } = useAppContext();

  const handleThemeChange = (newTheme) => {
    setUserTheme(newTheme);
  };

  return (
    <div>
      <h3 className={`${css.titleHeader} ${theme === 'dark' ? css.themeDark : ''}`}>Interface Theme</h3>
      <p className={css.subtitleHeader}>Select or customize your UI theme.</p>
      <div className={css.themeImageWrapper} style={{ '--accent-color': chosenColor }}>
        <div className={css.imageContainer} onClick={() => handleThemeChange('system')}>
          <img src="system.png" alt="system" className={`${css.themeImage} ${userTheme === 'system' ? css.checked : ''}`} />
          <div className={css.imageDescContainer}>
            <div className={`${css.selectRadio} ${userTheme === 'system' ? css.radioChecked : ''}`}>
              <FaCheck className={`${css.checkIcon} ${userTheme === 'system' ? css.iconChecked : ''}`} />
            </div>
            <div className={css.selectText}>System</div>
          </div>
        </div>
        <div className={css.imageContainer} onClick={() => handleThemeChange('light')}>
          <img src="light.png" alt="light" className={`${css.themeImage} ${userTheme === 'light' ? css.checked : ''}`} />
          <div className={css.imageDescContainer}>
            <div className={`${css.selectRadio} ${userTheme === 'light' ? css.radioChecked : ''}`}>
              <FaCheck className={`${css.checkIcon} ${userTheme === 'light' ? css.iconChecked : ''}`} />
            </div>
            <div className={css.selectText}>Light</div>
          </div>
        </div>
        <div className={css.imageContainer} onClick={() => handleThemeChange('dark')}>
          <img src="dark.png" alt="dark" className={`${css.themeImage} ${userTheme === 'dark' ? css.checked : ''}`} />
          <div className={css.imageDescContainer}>
            <div className={`${css.selectRadio} ${userTheme === 'dark' ? css.radioChecked : ''}`}>
              <FaCheck className={`${css.checkIcon} ${userTheme === 'dark' ? css.iconChecked : ''}`} />
            </div>
            <div className={css.selectText}>Dark</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsThemeSelector;
