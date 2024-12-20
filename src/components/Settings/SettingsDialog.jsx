import React from "react";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "../../components/ui/dialog";
import css from "../../styles/Settings/SettingsDialog.module.css";
import SettingsAccentColor from "./SettingsAccentColor";
import SettingsThemeSelector from "./SettingsThemeSelector";
import SettingsFilter from "./SettingsFilter";
import { useAppContext } from "../../context/AppContext";

const SettingsDialog = ({ isOpen, onOpenChange }) => {
    const { currentTheme, highlightColor, resetPreferences } = useAppContext(); // Updated variable names
    const isDarkMode = currentTheme === 'dark';

    const containerClass = [
        css.dialogContainer,
        isDarkMode && css.themeDark,
    ]
        .filter(Boolean)
        .join(' ');

    const dynamicStyles = {
        '--content-color': isDarkMode ? '#fff' : '#171616',
        '--theme-color': isDarkMode ? '#171616' : '#fff',
        '--accent-color': highlightColor,
    };

    return (
        <DialogContent className={`p-6 bg-white rounded-lg shadow-lg ${containerClass}`} style={dynamicStyles}>
            {/* Header Section */}
            <DialogHeader className={css.headerHeight}>
                <DialogTitle className={css.dialogTitle}>Settings</DialogTitle>
                <DialogDescription className={css.dialogDescription}>
                    Change the appearance, filters, and job results.
                </DialogDescription>
            </DialogHeader>

            <div className={css.horizontalMargin} />

            {/* Content Area */}
            <div className={css.contentArea}>
                {/* Accent Color Section */}
                <div className={css.contentSection}>
                    <SettingsAccentColor />
                </div>

                <div className={css.horizontalMargin} />

                {/* Theme Selector Section */}
                <div className={css.contentSection}>
                    <SettingsThemeSelector />
                </div>

                <div className={css.horizontalMargin} />

                {/* Filter Section */}
                <div className={css.contentSection}>
                    <SettingsFilter />
                </div>
            </div>

            {/* Footer Section */}
            <DialogFooter>
                <div className={css.footerContainer}>
                    <button
                        onClick={resetPreferences}
                        className={`${css.resetButton} ${isDarkMode ? css.themeDark : ''}`}
                    >
                        Reset to default
                    </button>
                    <button
                        onClick={() => onOpenChange(false)}
                        className={`${css.saveButton} ${isDarkMode ? css.themeDark : ''}`}
                    >
                        Save Changes
                    </button>
                </div>
            </DialogFooter>
        </DialogContent>
    );
};

export default SettingsDialog;
