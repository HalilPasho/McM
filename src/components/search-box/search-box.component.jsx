import React from "react";

import "./search-box.styles.scss";
import SearchBoxIcon from "../../assets/images/icons8.png";

export const SearchBox = ({ onSearchChange }) => (
  <React.Fragment>
    <div className="input-icons">
      <img alt="search" className="icon" src={SearchBoxIcon} />
      <input
        className="search-box"
        type="search"
        placeholder="Search for applicant"
        onChange={onSearchChange}
      />
    </div>
  </React.Fragment>
);
