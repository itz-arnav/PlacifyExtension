import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";
import DataItemPopupContent from './DataItemPopupContent';
import css from "../../styles/MainPage/DataItemDetailsPopup.module.css";

const DataItemDetailsPopup = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const { highlightColor } = useAppContext();

    return (
        <div className="relative" style={{ '--accent-color': highlightColor }}>
            <Dialog open={isDialogOpen} onOpenChange={setDialogOpen} className={css.dialogContainer}>
                {/* Icon to trigger the dialog */}
                <DialogTrigger asChild>
                    <FaEye
                        className={css.settingsIcon}
                    // Removed onClick since DialogTrigger handles it
                    />
                </DialogTrigger>

                {/* Settings Dialog Component */}
                <DataItemPopupContent isOpen={isDialogOpen} setDialogOpen={setDialogOpen} />
            </Dialog>
        </div>
    );
}

export default DataItemDetailsPopup;
