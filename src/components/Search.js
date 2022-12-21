import React from "react";
import "../App.css";
import Fakeweather from "../data/Fakeweather.json";

import clear from "../img/weather-icons/clear.svg";
// import "./Search.css";

class Search extends React.Component {
  state={
    input:"",
  };
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header>
      <form action="">
      <input className="search" type="text" name="searchh" placeholder="Type a city name" onChange={(e)=> {this.setState({input: e.target.value})}}/>
      <button type="submit" onClick={(e)=>{
        e.preventDefault(); this.props.click(this.state.input)
      }}>Find Weather</button>

      </form>
    </header>
    );
  }
}
export default Search;
