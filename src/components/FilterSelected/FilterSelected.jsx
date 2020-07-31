import React from "react";
import "./FilterSelected.scss";

const FilterSelected = () => {
  return (
    <React.Fragment>
      <div className="options_selected">
        <select className="status">
          <option value="0">Bids</option>
          <option value="1">Test 2</option>
          <option value="2">Test 3</option>
          <option value="3">Test 4</option>
          <option value="4">Test 5</option>
          <option value="5">Test 6</option>
        </select>
      </div>
      <div className="options_selected">
        <select className="status">
          <option value="0">Status</option>
          <option value="1">Test 2</option>
          <option value="2">Test 3</option>
          <option value="3">Test 4</option>
          <option value="4">Test 5</option>
          <option value="5">Test 6</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default FilterSelected;
