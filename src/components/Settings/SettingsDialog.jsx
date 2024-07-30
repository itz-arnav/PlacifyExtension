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

const SettingsDialog = ({ isOpen, onOpenChange }) => {
    return (
        <DialogContent className={`p-6 bg-white rounded-lg shadow-lg ${css.dialogContent}`}>
            <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
                <DialogDescription>
                    Adjust your application settings here.
                </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
                <p className="text-gray-600">
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
