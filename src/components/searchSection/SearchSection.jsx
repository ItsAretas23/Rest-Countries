import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "../dropDown/Dropdown";
import "./SearchSection.css";

const SearchSection = ({ handleSearch, isLoading, handleRegion }) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [optionsDiSplay, setOptionDisplay] = useState("");

  const handleDropdown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column gap-4 text-start py-5 flex-md-row justify-content-between">
          <div className="position-relative search-input">
            <IoSearch className="fs-2 position-absolute start-0 top-0 mt-3 ms-3" />
            <input
              disabled={isLoading}
              onChange={handleInputChange}
              className="border-0  w-100 py-3 rounded-2 ps-5 bg-elements custom-text-white"
              type="text"
              placeholder="Search For a Country..."
            />
          </div>
          <div
            onClick={handleDropdown}
            className="bg-elements dropdown1  py-3 px-4 rounded-2 position-relative d-flex align-items-center gap-2 justify-content-between "
           >
            <p className="m-0 ">
              {optionsDiSplay === "" ? "Filter by region" : optionsDiSplay}
            </p>
            <IoIosArrowDown
              style={{
                transform: toggleDropDown ? "rotate(180deg)" : "rotate(0deg)",
                transitionProperty: "0.9ms" 
              }}
            />
            {toggleDropDown ? (
              <Dropdown
                setToggleDropDown={setToggleDropDown}
                setOptionDisplay={setOptionDisplay}
                handleRegion={handleRegion}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
