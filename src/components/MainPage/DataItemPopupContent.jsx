import React from 'react';
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "../../components/ui/dialog";
import { useAppContext } from "../../context/AppContext";
import css from "../../styles/MainPage/DataItemDetailsPopup.module.css";

const DataItemPopupContent = ({ isOpen, setDialogOpen }) => { // Destructured props

    const { currentTheme, highlightColor } = useAppContext();
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
        <DialogContent className={`p-6 rounded-lg shadow-lg ${containerClass}`} style={dynamicStyles}>
            <DialogHeader className={css.headerHeight}>
                <DialogTitle className={css.dialogTitle}>Settings</DialogTitle>
                <DialogDescription className={css.dialogDescription}>
                    Change the appearance, filters, and job results. V2
                </DialogDescription>
            </DialogHeader>

            {/* Footer Section */}
            <DialogFooter>
                <div className={css.footerContainer}>
                    <button
                        className={`${css.resetButton} ${isDarkMode ? css.themeDark : ''}`}
                    >
                        Open in new tab
                    </button>
                    <button
                        onClick={() => setDialogOpen(false)}
                        className={`${css.saveButton} ${isDarkMode ? css.themeDark : ''}`}
                    >
                        Close
                    </button>
                </div>
            </DialogFooter>
        </DialogContent>
    );
}

export default DataItemPopupContent;
