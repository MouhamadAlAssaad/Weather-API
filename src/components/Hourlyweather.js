import React from "react";
import "../App.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

class Hourlyweather extends React.Component{

    render(){
        return(
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
          







        );

    }



}
export default Hourlyweather;
