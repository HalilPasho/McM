import React, { useState, useEffect } from "react";

import { Card } from "../card/card.component";
import CounterDetails from "../CounterDetails/CounterDetails";
import "./card-list.styles.scss";
import Arrow from "../../assets/images/Shapearrow.png";
import { SearchBox } from "../search-box/search-box.component";
import FilterSelected from "../FilterSelected/FilterSelected";
import { withRouter } from "react-router";
import CLoader from "../Loader/Laoder";

const CardList = (props) => {
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    props.history.push(`${props.name}`);
    return () => {};
  }, [props.history, props.name]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
    props.setName(e.target.value);
  };

  const filteredCards = props.cards.filter(
    (cards) =>
      cards.name.toLowerCase().includes(searchField.toLowerCase()) ||
      cards.email.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="card-list-hg">
      <div className="main_cotainer">
        <div className="arr_title">
          <img alt="arrow" src={Arrow} />{" "}
          <span className="head_title_card">Application</span>
        </div>
        <span></span>
        <div className="component_details">
          <CounterDetails />
        </div>
      </div>
      <div className="hg_pt">
        <SearchBox onSearchChange={onSearchChange} />
        <FilterSelected />
      </div>
      <div className="hd_appoint">
        {/* number 3 would be dynamic */}
        <span>Appointment set ({props.appointment})</span>
      </div>
      {props.loader ? (
        <CLoader />
      ) : (
        <div className="card-list">
          {/* used splice here not to show all users */}
          {filteredCards.splice(0, 3).map((cards) => (
            <Card
              appointmentDate="22 JULY 14:00"
              key={cards.id}
              cards={cards}
            />
          ))}
        </div>
      )}

      <div className="hd_appoint">
        {/* number 5 would be dynamic */}
        <span>Property viewed ({props.viewed})</span>
      </div>
      {/* supposed this to be another component with data from another API */}
      {props.loader ? (
        <CLoader />
      ) : (
        <div className="card-list">
          {filteredCards.splice(1, 5).map((cards) => (
            <Card
              bid="350000 $"
              appointmentDate="22 JULY 14:00"
              key={cards.id}
              cards={cards}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default withRouter(CardList);
