

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
      // Fakeweather,
      // fetchApiData: "",
      // getApiData: "",
      weather: null,
      loaded: false,
      city: "London",

    };
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this)
  }


  componentDidMount() {
    this.getData(this.state.city)
    
  }

  getData(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=3c982d20a8169557a3863a51d3fb4b8a`)
      .then(response => response.json())
      .then(resp => this.setState({ weather: resp, isLoaded: true }));

  }

  handleClick(e) {
    this.setState({
      city: e
    });
    let city = e;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=3c982d20a8169557a3863a51d3fb4b8a`)
      .then(
        (res) => res.json())
      .then(
        (res) => {
          this.setState({
            Weather: res,
            isLoaded: true
          });
        });
  }
  render() {

    function timearray(weather){
      let time=[];
      for(let i=5; i<=11; i++){
        time.push(weather.list[i].dt_txt.slice(11,16))
      }
      return time;
    }

    function temparray(weather){
      let temperature=[];
      for(let i=5; i<=11; i++){
        temperature.push((weather.list[i].main.temp -273.15).toFixed())
      }
      return temperature;
    }
  
    return (
      <div className="app">
         
      <Search />

      <Weathernow 
        WeathernowDescr={this.state.weather.list[2].weather[0].description}
        tempmin={(this.state.weather.list[2].main.temp_min -273.15).toFixed()}
        tempmax={(this.state.weather.list[2].main.temp_max -273.15).toFixed()}
        humidity={this.state.weather.list[2].main.humidity}
        pressure={this.state.weather.list[2].main.pressure}

      
      
      />

      <Hourlyweather
        timarray={timearray(this.state.weather)}
        tempparray={temparray(this.state.weather)}
      
      />

      </div>



    );
  }
}

export default App;







































  // componentDidMount() {
  //   fetch("https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=3c982d20a8169557a3863a51d3fb4b8a")
  //     .then((respo) => {
  //       return respo.json();
  //     })
  //     .then((data) => {
  //       let list = data.Global.NewConfirmed;
  //       this.setState({ fetchApiData: list });
  //     });
  // }
  // fetchData() {
  //   this.setState({ getApiData: this.state.fetchApiData });
  // }