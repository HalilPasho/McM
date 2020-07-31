import React from "react";

const Viewed = ({ viewed }) => {
  return (
    <div className="hg_desc">
      <span className="nr_ab">{viewed}</span>
      <p className="text_desc text_ab">Viewed</p>
    </div>
  );
};

export default Viewed;
