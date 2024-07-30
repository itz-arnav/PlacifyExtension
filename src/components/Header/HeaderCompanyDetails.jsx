/* global chrome */
import React from "react";
import css from "../../styles/Header/HeaderCompanyDetails.module.css";
import { useAppContext } from "../../context/AppContext";

const HeaderCompanyDetails = () => {
  const { theme } = useAppContext();

  // Determine classes based on theme
  const containerClass = `${css.placifyDetailsContainer} ${theme === 'dark' ? css.darkTheme : ''}`;
  const iconClass = `${css.placifyHeaderIcon}`;
  const textClass = `${css.placifyCompanyName} ${theme === 'dark' ? css.darkTheme : ''}`;

  const handleOpenWebsite = () => {
    chrome.tabs.create({ url: "https://www.google.com" });
  };

  return (
    <div className={containerClass} onClick={handleOpenWebsite} style={{ cursor: "pointer" }}>
      <img src="placify_icon.png" alt="Placify Logo" className={iconClass} />
      <span className={textClass}>Placify</span>
    </div>
  );
};

export default HeaderCompanyDetails;
