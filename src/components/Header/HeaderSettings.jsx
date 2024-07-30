import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { cn } from "../../utils/cl";
import css from "../../styles/Header/HeaderSettings.module.css";
import { Button } from "../../components/ui/button";

const HeaderSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* <Button variant="outline">Button</Button> */}

      {/* <CiSettings
        className="text-gray-500 cursor-pointer hover:text-gray-700"
        onClick={handleOpenModal}
        size={24}
      />
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          className="p-6 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold">Settings</h2>
          <p className="mt-4 text-gray-600">
            This is a basic modal dialog for settings.
          </p>
          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </Modal>
      )} */}
    </div>
  );
};

export default HeaderSettings;
