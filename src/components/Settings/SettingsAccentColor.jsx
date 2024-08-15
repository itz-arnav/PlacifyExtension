import React from 'react'
import { useAppContext } from "../../context/AppContext";
import css from "../../styles/Settings/SettingsAccentColor.module.css";

const SettingsAccentColor = () => {
    const { theme, chosenColor, setChosenColor } = useAppContext();
    const colors = [
        '#31cb00', // Green
        '#09bc8a', // Teal
        '#42d9c8', // Light Teal
        '#4361ee', // Blue
        '#8338ec', // Purple
        '#e63946', // Red
        '#ff006e', // Pink
        '#ffd500', // Yellow
        '#ff8800'  // Orange
    ];
    const handleRadioChange = (color) => {
        setChosenColor(color);
        localStorage.setItem('color', color);
    };
    const themeColor = theme === 'dark' ? "#171616" : "#fff";
    return (
        <div>
            <h3 className={`${css.titleHeader} ${theme === 'dark' ? css.themeDark : ''}`}>Accent Color</h3>
            <p className={css.subtitleHeader}>Update your extension to a brand new color.</p>
            <div className={css.radioContainer}>
                {colors.map(color => (
                    <label key={color} style={{ '--current-color': color }} className={css.radioLabel}>
                        <input
                            type="radio"
                            name="choice"
                            className={css.radioInput}
                            checked={chosenColor === color}
                            onChange={() => handleRadioChange(color)}
                        />
                    </label>
                ))}
            </div>
        </div>
    )
}

export default SettingsAccentColor
