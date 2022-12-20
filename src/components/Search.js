import React from "react";
import "../App.css";
import Fakeweather from "../data/Fakeweather.json";

import clear from "../img/weather-icons/clear.svg";
// import "./Search.css";

class Search extends React.Component {

  render() {
    return (
      <header>
      <form action="">
      <input className="search" type="text" name="searchh" placeholder="Type a city name"/>
      <button type="submit">Find Weather</button>

      </form>
    </header>
    );
  }
}
export default Search;
