import React, { useState, useEffect } from 'react';
import css from "../../styles/MainPage/MainPageSearch.module.css";
import { CiSearch } from "react-icons/ci";
import { useAppContext } from "../../context/AppContext";
import Select, { components } from 'react-select';
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPersonWorkspace, BsCodeSlash } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";

const MainPageSearch = () => {
    const {
        currentTheme,
        highlightColor,
        updateFilteredItems,
        itemCategory,
        setItemCategory,
        searchQuery,
        setSearchQuery,
    } = useAppContext();

    const isDarkMode = currentTheme === 'dark';

    const categoryOptions = [
        { value: 'Job', label: 'Jobs', icon: <MdOutlineWorkOutline /> },
        { value: 'Internship', label: 'Internships', icon: <BsPersonWorkspace /> },
        { value: 'Hackathon', label: 'Hackathons', icon: <BsCodeSlash /> },
        { value: 'Contest', label: 'Contests', icon: <FaLaptopCode /> },
    ];

    const [selectedOption, setSelectedOption] = useState(() =>
        categoryOptions.find(option => option.value === itemCategory)
    );

    const customStyles = {
        control: (base) => ({
            ...base,
            cursor: 'pointer',
            height: '34px',
            backgroundColor: isDarkMode ? '#171616' : '#fff',
            borderColor: `${highlightColor}77`,
            width: '200px',
        }),
        option: (base, state) => ({
            ...base,
            color: state.isSelected || state.isFocused ? '#fff' : isDarkMode ? '#fff' : '#000',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: state.isSelected
                ? highlightColor
                : state.isFocused
                    ? `${highlightColor}be`
                    : isDarkMode
                        ? '#242424'
                        : '#fff',
        }),
        singleValue: (base) => ({
            ...base,
            display: 'flex',
            alignItems: 'center',
            color: isDarkMode ? '#fff' : '#000',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: isDarkMode ? '#171616' : '#fff',
        }),
    };

    const CustomSingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            {props.data.icon}
            <span style={{ marginLeft: '6px' }}>{children}</span>
        </components.SingleValue>
    );

    const CustomOption = (props) => (
        <components.Option {...props} className={css.customOption}>
            <span style={{ marginRight: '6px', fontSize: '16px' }}>{props.data.icon}</span>
            {props.data.label}
        </components.Option>
    );

    const handleInputChange = (event) => {
        console.log("New Text: " + event.target.value);
        setSearchQuery(event.target.value);
    }

    const handleCategoryChange = (option) => {
        setItemCategory(option.value);
        setSelectedOption(option);
    };

    useEffect(() => {
        updateFilteredItems(searchQuery, itemCategory);
    }, [itemCategory, searchQuery]);

    const getClassName = (...classes) => classes.filter(Boolean).join(' ');

    return (
        <div className={getClassName(css.mainPageSearchContainer, isDarkMode && css.darkTheme)}>
            <div className={css.comboboxContainer}>
                <Select
                    className={getClassName(css.selectOption, isDarkMode && css.darkTheme)}
                    value={selectedOption}
                    onChange={handleCategoryChange}
                    options={categoryOptions}
                    styles={customStyles}
                    components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
                />
            </div>
            <div className={getClassName(css.searchContainer, isDarkMode && css.darkTheme)}>
                <CiSearch className={css.searchIcon} />
                <input
                    type="text"
                    className={getClassName(css.searchInput, isDarkMode && css.darkTheme)}
                    placeholder="Search for a title or company..."
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default MainPageSearch;
