import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";
import SettingsDialog from "../Settings/SettingsDialog";
import css from "../../styles/Header/HeaderSettings.module.css";
import { useAppContext } from "../../context/AppContext";

const HeaderSettings = () => {
  const { currentTheme } = useAppContext(); // Updated to use `currentTheme` from AppContext
  const [isDialogOpen, setDialogOpen] = useState(false);
  const isDarkMode = currentTheme === 'dark';

  return (
    <div className="relative">
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen} className={css.dialogContainer}>
        {/* Icon to trigger the dialog */}
        <DialogTrigger asChild>
          <CiSettings
            className={[
              css.settingsIcon,
              isDarkMode && css.darkTheme,
            ]
              .filter(Boolean)
              .join(' ')}
            size={24}
            onClick={() => setDialogOpen(true)}
          />
        </DialogTrigger>

        {/* Settings Dialog Component */}
        <SettingsDialog isOpen={isDialogOpen} onOpenChange={setDialogOpen} />
      </Dialog>
    </div>
  );
};

export default HeaderSettings;
