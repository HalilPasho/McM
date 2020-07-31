import React, { useEffect, useState } from "react";

import { CardList } from "./components/card-list/card-list.component";
// import { SearchBox } from "./components/search-box/search-box.component";
import NavBar from "./components/NavBar/NavBar";

import "./App.scss";

const App = () => {
  // const [searchField, setSearchField] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setCards(users));
    return () => {};
  }, []);

  return (
    <div className="App">
      <NavBar />
      {/* <SearchBox onSearchChange={onSearchChange} /> */}
      <CardList viewed="5" appointment="3" cards={cards} />
    </div>
  );
};

export default App;
