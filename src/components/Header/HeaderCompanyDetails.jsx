/* global chrome */
import React from "react";
import css from "../../styles/Header/HeaderCompanyDetails.module.css";

const HeaderCompanyDetails = () => {
  const handleOpenWebsite = () => {
    chrome.tabs.create({ url: "https://placify.vercel.app" });
  };

  return (
    <div
      className={css.placifyDetailsContainer}
      onClick={handleOpenWebsite}
      style={{ cursor: "pointer" }}
    >
      <img
        src="placify_icon.png"
        alt="Placify Logo"
        className={css.placifyHeaderIcon}
      />
      <span className={css.placifyCompanyName}>Placify</span>
    </div>
  );
};

export default HeaderCompanyDetails;
