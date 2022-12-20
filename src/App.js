import React, { Component } from "react";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import Search from "./components/Search";

import "./App.css";
import Weathernow from "./components/Weathernow";
import Hourlyweather from "./components/Hourlyweather";
import Fakeweather from "./data/Fakeweather.json"; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fakeweather
    
    };
  }



  render() {

    function timearray(Fakeweather){
      let time=[];
      for(let i=5; i<=11; i++){
        time.push(Fakeweather.list[i].dt_txt.slice(11,16))
      }
      return time;
    }

    function temparray(Fakeweather){
      let temperature=[];
      for(let i=5; i<=11; i++){
        temperature.push((Fakeweather.list[i].main.temp -273.15).toFixed())
      }
      return temperature;
    }
  
    return (
      <div className="app">
         
      <Search />

      <Weathernow 
        WeathernowDescr={this.state.Fakeweather.list[4].weather[0].description}
        tempmin={(this.state.Fakeweather.list[4].main.temp_min -273.15).toFixed()}
        tempmax={(this.state.Fakeweather.list[4].main.temp_max -273.15).toFixed()}
        humidity={this.state.Fakeweather.list[4].main.humidity}
        pressure={this.state.Fakeweather.list[4].main.pressure}

      
      
      />

      <Hourlyweather
        timarray={timearray(this.state.Fakeweather)}
        tempparray={temparray(this.state.Fakeweather)}
      
      />

      </div>



    );
  }
}

export default App;
