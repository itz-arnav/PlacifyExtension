import React from "react";
import css from "../../styles/Header/Header.module.css";
import HeaderCompanyDetails from "./HeaderCompanyDetails";
import HeaderActions from "./HeaderActions";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { currentTheme } = useAppContext();

  const containerClassName = [
    css.headerContainer,
    currentTheme === 'dark' && css.darkTheme,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={containerClassName}>
      <HeaderCompanyDetails />
      <HeaderActions />
    </header>
  );
};

export default Header;
