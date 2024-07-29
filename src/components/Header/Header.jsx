import React from "react";
import css from "../../styles/Header/Header.module.css";
import HeaderCompanyDetails from "./HeaderCompanyDetails";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <HeaderCompanyDetails />
      <HeaderActions />
    </header>
  );
};

export default Header;
