import React from "react";
import "../App.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import Fakeweather from "../data/Fakeweather.json";
import rain from "../img/weather-icons/rain.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";



class Hourlyweather extends React.Component{



    render(){

      function iconChoosing(num) {
        if (num < 300) {
          return storm;
        } else if (num >= 300 && num < 499) {
          return drizzle;
        } else if (num >= 500 && num < 599) {
          return rain;
        } else if (num >= 600 && num < 699) {
          return snow;
        } else if (num >= 700 && num < 799) {
          return fog;
        } else if (num === 800) {
          return clear;
        } else if (num === 801) {
          return partlycloudy;
        } else if (num > 801 && num <= 805) {
          return mostlycloudy;
        } else {
          return undefined
        }
  
      }
      
      


        return(
            <div className="hourweather">
            <article>
            
            <time>{this.props.timarray[0]}</time>
            <img src={rain} alt="not clear"></img>
            {console.log(this.props.imageSrc)}
            <span>{this.props.tempparray[0]}&deg;C</span>
            </article>
            <article>
              <time>{this.props.timarray[1]}</time>
              <img src={rain} alt="not clear"></img>
              <span>{this.props.tempparray[1]}&deg;C</span>
            </article>
            <article>
              <time>{this.props.timarray[2]}</time>
              <img src={rain} alt="clear"></img>
              <span>{this.props.tempparray[2]}&deg;C</span>
            </article>
            <article>
              <time>{this.props.timarray[3]}</time>
              <img src={rain} alt="clear"></img>
              <span>{this.props.tempparray[3]}&deg;C</span>
            </article>
            <article>
              <time>{this.props.timarray[4]}</time>
              <img src={rain} alt="clear"></img>
              <span>{this.props.tempparray[4]}&deg;C</span>
            </article>
            <article>
              <time>{this.props.timarray[5]}</time>
              <img src={rain} alt="clear"></img>
              <span>{this.props.tempparray[5]}&deg;C</span>
            </article>
            <article>
              <time>{this.props.timarray[6]}</time>
              <img src={rain} alt="clear"></img>
              <span>{this.props.tempparray[6]}&deg;C</span>
            </article>
    
    
    
    
    
    
    
    
    
    
          </div>
          







        );

     



    }

}
export default Hourlyweather;
