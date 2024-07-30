import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";
import SettingsDialog from "../Settings/SettingsDialog"; // Import the new SettingsDialog component
import css from "../../styles/Header/HeaderSettings.module.css"; // Ensure the path is correct, also remove double slashes
import { useAppContext } from "../../context/AppContext"; // Import the theme context

const HeaderSettings = () => {
  const { theme } = useAppContext(); // Assuming theme is stored in this context
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = theme === 'dark'; // Check if the current theme is 'dark'
 
  return (
    <div className="relative">
      <Dialog open={isOpen} onOpenChange={setIsOpen} className={css.dialogContainer}>
        {/* Trigger to open the dialog */}
        <DialogTrigger asChild>
          <CiSettings
            className={`${css.settingsIcon} ${isDarkMode ? css.darkTheme : ''}`}
            size={24}
            onClick={() => setIsOpen(true)}
          />
        </DialogTrigger>

        {/* Settings Dialog Component */}
        <SettingsDialog isOpen={isOpen} onOpenChange={setIsOpen} />
      </Dialog>
    </div>
  );
};

export default HeaderSettings;
