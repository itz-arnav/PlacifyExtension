/* global chrome */
import React from "react";
import css from "../../styles/Header/HeaderCompanyDetails.module.css";
import { useAppContext } from "../../context/AppContext";

const HeaderCompanyDetails = () => {
  const { currentTheme } = useAppContext();

  // Define dynamic styles and classes
  const containerClass = [
    css.placifyDetailsContainer,
    currentTheme === 'dark' && css.darkTheme,
  ]
    .filter(Boolean)
    .join(' ');

  const textClass = [
    css.placifyCompanyName,
    currentTheme === 'dark' && css.darkTheme,
  ]
    .filter(Boolean)
    .join(' ');

  const handleOpenWebsite = () => {
    chrome.tabs.create({ url: "https://www.google.com" });
  };

  return (
    <div className={containerClass} onClick={handleOpenWebsite} style={{ cursor: "pointer" }}>
      <img
        src="placify_icon.png"
        alt="Placify Logo"
        className={css.placifyHeaderIcon}
      />
      <span className={textClass}>Placify</span>
    </div>
  );
};

export default HeaderCompanyDetails;
