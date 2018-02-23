import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "def96d2721e4de07220724e98674cc45";

class App extends React.Component{

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
  }
  render(){
    return(
      <div>
        <p>Hey</p> 
        <h1> Hello! </h1>
        <Titles/>
        <Form/>
        <Weather />
      </div>
    );
  }
}

export default App;