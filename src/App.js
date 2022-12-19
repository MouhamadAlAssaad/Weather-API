import React, { Component } from "react";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import Search from "./components/Search";

import "./App.css";
import Weathernow from "./components/Weathernow";
import Hourlyweather from "./components/Hourlyweather";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }



  render() {
    return (
      <div className="app">
         
      <Search />

      <Weathernow/>

      <Hourlyweather/>

      </div>



    );
  }
}

export default App;
