import React from "react";

import "./card.styles.scss";

export const Card = ({ cards, appointmentDate, bid }) => {
  const colors = ["#E3E7F9", "#CEF0F4", "#F0F4E1", "#FEE8D3", "#FCD6DE"];
  const colorsText = ["#405493", "#20ADC5", "#ACAF36", "#E97428"];

  let firstname = cards.name.charAt(0);
  const lastname = cards.name.split(" ")[1].charAt(0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  const colorText = colorsText[Math.floor(Math.random() * colorsText.length)];
  // console.log(lastname);
  return (
    <div className="card-container">
      <div
        style={{ backgroundColor: color, color: colorText }}
        className="profileImage"
      >
        {firstname} {lastname}
      </div>

      <h2 className="f_name"> {cards.name}</h2>
      <p className="ph_number">+{cards.phone}</p>
      <p className="ph_number"> {cards.email} </p>
      <p className="app_date">Appointment {appointmentDate}</p>
      {bid && (
        <p className="bid">
          <span>Bid</span> {bid && bid}
        </p>
      )}
    </div>
  );
};
