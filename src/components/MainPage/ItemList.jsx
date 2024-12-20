import React from 'react';
import css from "../../styles/MainPage/ItemList.module.css";
import DataItem from './DataItem';
import { useAppContext } from "../../context/AppContext";

const ItemList = () => {
    const { currentTheme, highlightColor, filteredItems } = useAppContext();
    const isDarkMode = currentTheme === 'dark';

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className={css.itemListMainWrapper} style={{ '--accent-color': highlightColor }}>
            <div className={`${css.itemListMainContainer} ${isDarkMode ? css.darkTheme : ''}`}>
                {filteredItems.map(item => (
                    <DataItem key={item.id} item={item} openInNewTab={openInNewTab} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
