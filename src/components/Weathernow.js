import React from "react";
import "../App.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class Weathernow extends React.Component {

    render(){
        return (
            <main className="app__main">

            <figure>
              <img src={mostlycloudy} alt="overcast clouds"></img> 
            <figcaption>Overcast clouds</figcaption>
            </figure>
            <div className="abouttemperature">
              <span><b>Temperature</b></span>10&deg; to 11&deg;C
            <div>
            <p>
              <span><b>Humidity</b></span> 78% <span><b>Pressure</b></span> 1008.48
            </p>
            </div>
            </div>
          </main>

        );
    }
}
export default Weathernow;