import React from 'react';
import Header from './Header/Header';
import MainPageSearch from './MainPage/MainPageSearch';
import ItemList from './MainPage/ItemList';
import css from '../styles/App.module.css';
import { useAppContext } from "../context/AppContext";

const App = () => {
  const { currentTheme } = useAppContext();

  const containerClass = [
    css.homeContainer,
    currentTheme === 'dark' ? css.darkTheme : '',
  ].join(' ').trim();

  return (
    <div className={containerClass}>
      <Header />
      <MainPageSearch />
      <ItemList />
    </div>
  );
};

export default App;
