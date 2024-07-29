import React from 'react';
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPersonWorkspace, BsCodeSlash } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import '../styles/Popup.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'JOBS', type: 'job', icon: MdOutlineWorkOutline },
    { name: 'INTERNSHIPS', type: 'internship', icon: BsPersonWorkspace },
    { name: 'CONTESTS', type: 'contest', icon: BsCodeSlash },
    { name: 'HACKATHONS', type: 'hackathon', icon: FaLaptopCode },
  ];

  if (!tabs || tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  return (
    <div className="tabContainer" role="tablist">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        return (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === tab.type}
            className={`tab ${activeTab === tab.type ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.type)}
          >
            <Icon aria-hidden="true" /> {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
