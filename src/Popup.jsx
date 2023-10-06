/* global chrome */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Popup.css';
import { BsCodeSlash, BsPersonWorkspace } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import loading from "./assets/img/loading.gif"

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'JOBS', type: 'job', icon: MdOutlineWorkOutline },
    { name: 'INTERNSHIPS', type: 'internship', icon: BsPersonWorkspace },
    { name: 'CONTESTS', type: 'contest', icon: BsCodeSlash },
    { name: 'HACKATHONS', type: 'hackathon', icon: FaLaptopCode },
  ];

  return (
    <div className="tabContainer">
      <div className="tabs">
        {tabs.map(tab => {
          const Icon = tab.icon; // Store the icon component in a variable
          return (
            <div
              key={tab.name}
              className={`tab ${activeTab === tab.type ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.type)}
            >
              <Icon /> {tab.name} {/* Use the Icon component */}
            </div>
          );
        })}
      </div>
    </div>

  );
};

const Popup = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('job');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://placify-backend.vercel.app/api/posts/');
      setData(result.data.items);
    };
    fetchData();
  }, []);

  const openInNewTab = async (url) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    chrome.tabs.create({ url: url, active: false });
    await axios.post("https://placify-backend-m4tnx14ua-itz-arnav.vercel.app/api/clicks/");
  };
  

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  }

  function formatDate(dateString) {
    // Convert to Date object
    let date = new Date(dateString);

    // Get the UTC offset in minutes and convert it to milliseconds
    const offset = date.getTimezoneOffset() * 60000;

    // Get the time zone offset for Asia/Kolkata in milliseconds
    const ISTOffset = 330 * 60000;

    // Convert the date to the IST timezone
    date = new Date(date.getTime() + offset + ISTOffset);

    // Format the date
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesString = minutes < 10 ? '0' + minutes : minutes; // ensure two digits

    return `${day} ${month}, ${year} - ${hours}:${minutesString}${ampm}`;
}

  const filteredData = data ? data.filter(item => item.type === activeTab) : [];

  return (

    <div className="App">
      {data === null ?
        <img src={loading} alt="Loading..." className='loading' />
        :
        <div className="container">
          <div className="title">Placify</div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="scrollArea">
            <div className="dataContainer">
              {filteredData.map((item, index) => (
                <div className="data" key={index} onClick={() => openInNewTab(item.website)}>
                  <img src={item.imageIcon} alt={item.name} className="img" />

                  <div className="companyTitle">
                    <span className="companyName">
                      {item.company}
                    </span>
                    <span className="companyURL">
                      {truncateString(item.website, 25)}
                    </span>
                  </div>

                  <div className="urlTitle">
                    <span
                      className="siteName"
                      style={{ cursor: 'pointer' }}
                    >
                      {item.name}
                    </span>
                  </div>

                  {(item.type === 'job' || item.type === 'internship') ? (
                    <div className="additionalInfo">
                      <div className="ctc">CTC: {item.ctc}</div>
                      <div className="batchEligible">Batch Eligible: {item.batchEligible}</div>
                    </div>
                  ) : (
                    <div className="regDeadline">
                      <span className="endsAt">Ends at</span>
                      <span className="endsDate">{formatDate(item.closingDate)}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Popup;
