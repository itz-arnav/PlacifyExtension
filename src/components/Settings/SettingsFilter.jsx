import React from 'react';
import css from "../../styles/Settings/SettingsFilter.module.css";
import { useAppContext } from "../../context/AppContext";

const SettingsFilter = () => {
    const {
        currentTheme,
        highlightColor,
        salaryThreshold,
        setSalaryThreshold,
        batchPreference,
        setBatchPreference,
    } = useAppContext(); // Updated variable names

    const isDarkMode = currentTheme === 'dark';

    const handleSliderChange = (event) => {
        const newValue = Number(event.target.value);
        setSalaryThreshold(newValue);
    };

    const handleInputChange = (event) => {
        const newValue = event.target.value === "" ? 0 : Number(event.target.value);
        if (newValue > 50) return; // Ensure max limit is not exceeded
        setSalaryThreshold(newValue);
    };

    const percentage = (salaryThreshold / 50) * 100;

    const sliderStyle = {
        '--accent-color': highlightColor,
        '--value': `${percentage}%`,
    };

    const handleBatchSelection = (newBatch) => {
        setBatchPreference(newBatch);
    };

    return (
        <div>
            <h3 className={`${css.titleHeader} ${isDarkMode ? css.themeDark : ''}`}>Post Filter</h3>
            <p className={css.subtitleHeader}>Filter posts according to your preferences.</p>

            <div className={css.postFilterWrapper} style={sliderStyle}>
                {/* Minimum CTC Filter */}
                <div className={css.postFilterContainer}>
                    <div className={`${css.postLabelDesc} ${isDarkMode ? css.themeDark : ''}`}>
                        Minimum CTC (Per Annum)
                    </div>
                    <div className={css.sliderWrapper}>
                        <input
                            type="range"
                            min="0"
                            max="50"
                            value={salaryThreshold}
                            className={css.inputRangeSlider}
                            onChange={handleSliderChange}
                        />
                        <input
                            type="number"
                            min="0"
                            max="50"
                            value={salaryThreshold}
                            className={`${css.inputRangeText} ${isDarkMode ? css.themeDark : ''}`}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Preferred Batch Filter */}
                <div className={css.postFilterContainer}>
                    <div className={`${css.postLabelDesc} ${isDarkMode ? css.themeDark : ''}`}>
                        Preferred Batch
                    </div>
                    <div className={css.sliderWrapper}>
                        <ul className={`${css.batchList} ${isDarkMode ? css.themeDark : ''}`}>
                            {['Any', '2022', '2023', '2024', '2025', '2026'].map((year) => (
                                <li
                                    key={year}
                                    className={`${css.batchListItem} ${batchPreference === year ? css.batchSelected : ''
                                        } ${isDarkMode ? css.themeDark : ''}`}
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
