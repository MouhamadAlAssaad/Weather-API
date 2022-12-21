import React from "react";
import "../App.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import Fakeweather from "../data/Fakeweather.json";
import rain from "../img/weather-icons/rain.svg";

class Weathernow extends React.Component {

    render(){

      
        return (
            <main className="app__main">

            <figure>
              <img src={mostlycloudy} alt="overcast clouds"></img> 
            <figcaption>{this.props.WeathernowDescr}</figcaption>
            </figure>
            <div className="abouttemperature">
              <span><b>Temperature</b></span>{this.props.tempmin}&deg;C to {this.props.tempmax}&deg;C
            <div>
            <p>
              <span><b>Humidity</b></span> {this.props.humidity}% <span><b>Pressure</b></span> {this.props.pressure}
            </p>
            </div>
            </div>
          </main>

        );
    }
}
export default Weathernow;