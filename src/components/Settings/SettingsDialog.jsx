import React from "react";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "../../components/ui/dialog";
import css from "../../styles/Settings/SettingsDialog.module.css";
import SettingsAccentColor from "./SettingsAccentColor";
import SettingsThemeSelector from "./SettingsThemeSelector";
import SettingsFilter from "./SettingsFilter";
import { useAppContext } from "../../context/AppContext";

const SettingsDialog = ({ isOpen, onOpenChange }) => {
    const { theme, chosenColor, resetSettings } = useAppContext();
    const containerClass = `${css.dialogContainer} ${theme === 'dark' ? css.themeDark : ''}`;

    const contentColor = theme === 'dark' ? "#fff" : "#171616";

    return (
        <DialogContent className={`p-6 bg-white rounded-lg shadow-lg ${containerClass}`} style={{
            '--content-color': contentColor,
            '--theme-color': theme === 'dark' ? '#171616' : '#fff',
            '--accent-color': chosenColor,
        }}>
            <DialogHeader className={css.headerHeight}>
                <DialogTitle className={css.dialogTitle}>Settings</DialogTitle>
                <DialogDescription className={css.dialogDescription}>Change the appearance, filters and job results.</DialogDescription>
            </DialogHeader>

            <div className={`${css.horizontalMargin} ${theme === 'dark' ? css.horizontalMarginDark : ''}`} />

            <div className={css.contentArea}>
                <div className={css.contentSection}>
                    <SettingsAccentColor />
                </div>

                <div className={`${css.horizontalMargin} ${theme === 'dark' ? css.horizontalMarginDark : ''}`} />
                <div className={css.contentSection}>
                    <SettingsThemeSelector />
                </div>

                <div className={`${css.horizontalMargin} ${theme === 'dark' ? css.horizontalMarginDark : ''}`} />
                <div className={css.contentSection}>
                    <SettingsFilter />
                </div>
            </div>

            <DialogFooter>
                <div className={css.footerContainer}>
                    <button onClick={() => resetSettings()} className={`${css.resetButton} ${theme === 'dark' ? css.themeDark : ''}`}>Reset to default</button>
                    <button onClick={() => onOpenChange(false)} className={`${css.saveButton} ${theme === 'dark' ? css.themeDark : ''}`}>Save Changes</button>
                </div>
            </DialogFooter>
        </DialogContent>
    );
};

export default SettingsDialog;
