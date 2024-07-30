import React from "react";
import { CiSettings } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";

const HeaderSettings = () => {
  return (
    <div className="relative">
      <Dialog>
        {/* Trigger to open the dialog */}
        <DialogTrigger asChild>
          <CiSettings
            className="text-gray-500 cursor-pointer hover:text-gray-700"
            size={24}
          />
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-lg shadow-lg">
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
            <Button variant="solid" onClick={() => document.body.removeChild(document.querySelector('#headlessui-dialog-portal'))}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderSettings;
