import React from 'react';
import css from "../../styles/Settings/SettingsFilter.module.css";
import { useAppContext } from "../../context/AppContext";

const SettingsFilter = () => {
    const { theme, chosenColor, minSalaryFilter, setMinSalaryFilter, batchFilter, setBatchFilter } = useAppContext();

    const handleSliderChange = (event) => {
        const newValue = Number(event.target.value);
        setMinSalaryFilter(newValue);
    };

    const handleInputChange = (event) => {
        const newValue = event.target.value === "" ? 0 : Number(event.target.value);
        if (newValue > 50) {
            return 50;
        }
        setMinSalaryFilter(newValue);
    };

    const percentage = (minSalaryFilter / 50) * 100;

    const sliderStyle = {
        '--accent-color': chosenColor,
        '--value': `${percentage}%`
    };

    const handleBatchSelection = (newBatch) => {
        setBatchFilter(newBatch);
    }

    return (
        <div>
            <h3 className={`${css.titleHeader} ${theme === 'dark' ? css.themeDark : ''}`}>Post Filter</h3>
            <p className={css.subtitleHeader}>Filter posts according to your preferences.</p>
            <div className={css.postFilterWrapper} style={sliderStyle}>
                <div className={css.postFilterContainer}>
                    <div className={`${css.postLabelDesc} ${theme === 'dark' ? css.themeDark : ''}`}>Minimum CTC (Per Annum)</div>
                    <div className={css.sliderWrapper}>
                        <input
                            type="range"
                            min="0"
                            max="50"  // Set max limit to 50
                            value={minSalaryFilter}
                            className={css.inputRangeSlider}
                            id="myRange"
                            onChange={handleSliderChange}
                        />
                        <input
                            type="number"
                            min="0"  // Set min limit to 0
                            max="50"  // Set max limit to 50
                            value={minSalaryFilter}
                            className={`${css.inputRangeText} ${theme === 'dark' ? css.themeDark : ''}`}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className={css.postFilterContainer}>
                    <div className={`${css.postLabelDesc} ${theme === 'dark' ? css.themeDark : ''}`}>Preferred Batch</div>
                    <div className={css.sliderWrapper}>
                        <ul className={`${css.batchList} ${theme === 'dark' ? css.themeDark : ''}`}>
                            {['Any', '2022', '2023', '2024', '2025', '2026'].map(year => (
                                <li
                                    key={year}
                                    className={`${css.batchListItem} ${batchFilter === year ? css.batchSelected : ''} ${theme === 'dark' ? css.themeDark : ''}`}
                                    onClick={() => handleBatchSelection(year)}
                                >
                                    {year}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsFilter;
