import React from 'react';
import css from "../../styles/MainPage/DataItem.module.css";
import { useAppContext } from "../../context/AppContext";
import { FaMoneyBillWave, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { MdGroups, MdDateRange, MdAccessTime } from "react-icons/md";

const DataItem = React.memo(({ item, openInNewTab }) => {
    const { currentTheme, highlightColor } = useAppContext();

    const styles = {
        '--accent-color': highlightColor,
        '--background-color': currentTheme === 'dark' ? '#292a2d' : '#F0F2F6',
        '--hover-color': currentTheme === 'dark' ? '#373737' : '#ebeef3',
        '--text-color': currentTheme === 'dark' ? '#cdcdcd' : '#555',
    };

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

        const day = date.getDate();
        const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
            (day % 10 === 2 && day !== 12) ? 'nd' :
                (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

        return formattedDate.replace(day.toString(), `${day}${suffix}`);
    };

    const formatTime = (date) => {
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    return (
        <div className={css.dataItemContainer} style={styles}>
            <img
                className={css.dataItemImage}
                src={item.imageIcon}
                alt={`${item.name} Logo`}
            />
            <div className={css.dataItemDetailWrapper}>
                <div className={css.dataItemNameText}>{item.name}</div>
                <div className={css.dataItemCompanyText}>{item.company}</div>
            </div>
            <div className={css.dataItemAdditionalWrapper}>
                {item.type === "Contest" || item.type === "Hackathon" ? (
                    <>
                        <div className={css.dateWrapper}>
                            <MdDateRange className={css.wrapperIcon} />
                            <span className={css.textSpan}>
                                {formatDate(new Date(item.closingDate))}
                            </span>
                        </div>
                        <div className={css.timeWrapper}>
                            <MdAccessTime className={css.wrapperIcon} />
                            <span className={css.textSpan}>
                                {formatTime(new Date(item.closingDate))}
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={css.salaryWrapper}>
                            <FaMoneyBillWave className={css.wrapperIcon} />
                            <span className={css.textSpan}>{item.ctc}</span>
                        </div>
                        <div className={css.dataItemBatchWrapper}>
                            <MdGroups className={css.wrapperIcon} />
                            <span className={css.textSpan}>{item.batchEligible}</span>
                        </div>
                    </>
                )}
            </div>
            <div className={css.actionButtons}>
                <FaEye
                    className={css.visitButton}
                    title="View Details"
                    onClick={() => console.log(`Viewing details of ${item.name}`)}
                />
                <FaExternalLinkAlt
                    className={css.visitButton}
                    title="Visit Link"
                    onClick={() => openInNewTab(item.website)}
                />
            </div>
        </div>
    );
});

export default DataItem;
