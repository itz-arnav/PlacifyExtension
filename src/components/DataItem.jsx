import React from 'react';
import { formatDate } from '../utils/utils';
import '../styles/Popup.css';

const DataItem = React.memo(({ item, openInNewTab }) => {
  if (!item) {
    return <div>Item not available</div>;
  }

  return (
    <div className="data" onClick={() => openInNewTab(item.website)}>
      <img src={item.imageIcon} alt={item.name || 'Default Item'} className="img" />
      <div className="companyTitle">
        <span className="companyName">{item.company || 'Unknown Company'}</span>
        <span className="companyURL">{item.website || 'No URL'}</span>
      </div>
      <div className="urlTitle">
        <span className="siteName" style={{ cursor: 'pointer' }}>{item.name || 'No Name Provided'}</span>
      </div>
      {item.type === 'job' || item.type === 'internship' ? (
        <div className="additionalInfo">
          <div className="ctc">CTC: {item.ctc || 'Not Provided'}</div>
          <div className="batchEligible">Batch Eligible: {item.batchEligible || 'Not Available'}</div>
        </div>
      ) : (
        <div className="regDeadline">
          <span className="endsAt">Ends at</span>
          <span className="endsDate">{formatDate(item.closingDate) || 'No Deadline'}</span>
        </div>
      )}
    </div>
  );
});

export default DataItem;
