/* global chrome */
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Tabs from './Tabs';
import DataItem from './DataItem';
import '../styles/Popup.css';
import loadingImg from '../assets/img/loading.gif';

const Popup = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('job');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const filteredData = useMemo(() => data.filter(item => item.type === activeTab), [data, activeTab]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await axios('https://placify-backend.vercel.app/api/posts/');
        setData(result.data.items);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const openInNewTab = (url) => {
    const prefixedUrl = url.startsWith('http') ? url : `https://${url}`;
    chrome.tabs.create({ url: prefixedUrl });
    axios.post("https://placify-backend.vercel.app/api/clicks/");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      {isLoading ? (
        <img src={loadingImg} alt="Loading..." className="loading" />
      ) : (
        <div className="container">
          <div className="title">
            <img src="placify_icon.png" alt="Placify" className="placifyHeaderIcon" />
            <div className="titleText">Placify</div>
          </div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="scrollArea">
            {filteredData.length > 0 ? filteredData.map((item, index) => (
              <DataItem key={index} item={item} openInNewTab={openInNewTab} />
            )) : <div>No items found.</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
