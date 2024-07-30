import React from 'react';
import Header from './Header/Header';
import css from '../styles/App.module.css';
import { useAppContext } from "../context/AppContext";

const App = () => {
  const { theme } = useAppContext();

  // Determine the class names based on the theme
  const containerClassName = `${css.homeContainer} ${theme === 'dark' ? css.darkTheme : ''}`;

  return (
    <div className={containerClassName}>
      <Header />

      {/* TAB */}

      {/* ITEMLIST */}
    </div>
  );
}

export default App;
