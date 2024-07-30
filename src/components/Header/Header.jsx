import React from "react";
import css from "../../styles/Header/Header.module.css";
import HeaderCompanyDetails from "./HeaderCompanyDetails";
import HeaderActions from "./HeaderActions";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { theme } = useAppContext();

  const containerClassName = `${css.headerContainer} ${theme === 'dark' ? css.darkTheme : ''}`;
  return (
    <header className={containerClassName}>
      <HeaderCompanyDetails />
      <HeaderActions />
    </header>
  );
};

export default Header;
