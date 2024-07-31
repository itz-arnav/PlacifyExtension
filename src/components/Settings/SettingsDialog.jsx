import React from "react";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import css from "../../styles/Settings/SettingsDialog.module.css";
import { useAppContext } from "../../context/AppContext";

const SettingsDialog = ({ isOpen, onOpenChange }) => {
    const { theme } = useAppContext(); // Assuming 'theme' will be either 'light' or 'dark'
    const containerClassName = `${css.dialogContainer} ${theme === 'dark' ? css.darkTheme : ''}`;

    return (
        <DialogContent className={`p-6 bg-white rounded-lg shadow-lg ${containerClassName}`}>
            <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
                <DialogDescription>
                    Adjust your application settings here.
                </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
                <p className="text-gray-600 ${theme === 'dark' ? 'text-gray-300' : ''}">
                    You can place any form or settings controls here.
                </p>
            </div>

            <DialogFooter>
                <Button variant="solid" onClick={() => onOpenChange(false)}>Close</Button>
            </DialogFooter>
        </DialogContent>
    );
};

export default SettingsDialog;
