import React from "react";

const New = ({ news }) => {
  return (
    <div className="hg_desc">
      <span className="nr_ab">{news}</span>
      <p className="text_desc text_ab">New</p>
    </div>
  );
};

export default New;
