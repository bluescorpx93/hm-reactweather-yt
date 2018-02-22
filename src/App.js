import React from "react";
import Titles from './components/Titles';

class App extends React.Component{
  render(){
    return(
      <div>
        <p>Hey</p> 
        <h1> Hello! </h1>
        <Titles/>
      </div>
    );
  }
}

export default App;