import React from "react";
import css from "../../styles/Header/HeaderActions.module.css";
import HeaderThemeComponent from "./HeaderThemeComponent";

const HeaderActions = () => {
  return (
    <div className={css.themeAndSettingsContainer}>
      <HeaderThemeComponent />
    </div>
  );
};

export default HeaderActions;
