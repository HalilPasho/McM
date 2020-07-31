import React from "react";
import New from "./Detailed/New";
import Appointment from "./Detailed/Appointments";
import Other from "./Detailed/other";
import Total from "./Detailed/Total";
import Viewed from "./Detailed/Viewed";

const CounterDetails = () => {
  return (
    <div style={{ display: "flex" }}>
      <Total total="25" />
      <New news="10" />
      <Viewed viewed="5" />
      <Appointment appointments="3" />
      <Other other="6" />
    </div>
  );
};

export default CounterDetails;
