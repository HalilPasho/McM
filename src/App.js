import React, { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
// import { SearchBox } from "./components/search-box/search-box.component";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
  // const [searchField, setSearchField] = useState("");
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(true);
  // console.log(props);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?${name}`)
      .then((response) => response.json())
      .then((users) => setCards(users))
      .then(setLoader(false))
      .catch((err) => {
        console.log(err);
        setLoader(true);
      });

    return () => {};
  }, [name]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <SearchBox onSearchChange={onSearchChange} /> */}
        <Switch>
          <Route path={`/`}>
            {" "}
            <CardList
              setName={setName}
              name={name}
              viewed="5"
              loader={loader}
              appointment="3"
              cards={cards}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
