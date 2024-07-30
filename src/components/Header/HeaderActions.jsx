import React from "react";
import css from "../../styles/Header/HeaderActions.module.css";
import HeaderThemeComponent from "./HeaderThemeComponent";
import HeaderSettings from "./HeaderSettings";

const HeaderActions = () => {
  return (
    <div className={css.themeAndSettingsContainer}>
      <HeaderThemeComponent />
      <HeaderSettings />
    </div>
  );
};

export default HeaderActions;
