import React from "react";

const Appointments = ({ appointments }) => {
  return (
    <div className="hg_desc">
      <span className="nr_ab">{appointments}</span>
      <p className="text_desc text_ab">Appointments</p>
    </div>
  );
};

export default Appointments;
