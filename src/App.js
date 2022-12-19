import React, { Component } from "react";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";


import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }



  render() {
    return (
      <div className="app">
      <header>
        <form action="">
        <input className="search" type="text" name="searchh" placeholder="Type a city name"/>
        <button type="submit">Find Weather</button>

        </form>
      </header>
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
      <div className="hourweather">
        <article>

        <time>03:00</time>
        <img src={mostlycloudy} alt="not clear"></img>
        <span>8&deg;C</span>
        </article>
        <article>
          <time>06:00</time>
          <img src={mostlycloudy} alt="not clear"></img>
          <span>9&deg;C</span>
        </article>
        <article>
          <time>09:00</time>
          <img src={clear} alt="clear"></img>
          <span>14&deg;C</span>
        </article>
        <article>
          <time>12:00</time>
          <img src={clear} alt="clear"></img>
          <span>17&deg;C</span>
        </article>
        <article>
          <time>15:00</time>
          <img src={clear} alt="clear"></img>
          <span>18&deg;C</span>
        </article>
        <article>
          <time>18:00</time>
          <img src={clear} alt="clear"></img>
          <span>16&deg;C</span>
        </article>
        <article>
          <time>21:00</time>
          <img src={mostlycloudy} alt="clear"></img>
          <span>13&deg;C</span>
        </article>










      </div>
      </div>

    );
  }
}

export default App;
