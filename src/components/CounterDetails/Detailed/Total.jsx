import React from "react";
import "../CounterDetails.scss";

const Total = ({ total }) => {
  return (
    <div className="hg_desc">
      <span className="nr_ab">{total}</span>
      <p className="text_desc text_ab">Total</p>
    </div>
  );
};

export default Total;
