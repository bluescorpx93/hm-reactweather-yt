import React from 'react';

class Weather extends React.Component{
	render(){
		return(
			<div>
			
			<strong>Location</strong>: {this.props.city}, {this.props.country} <br/>
			<strong>Temperature</strong>: {this.props.temperature} <br/>
			<strong>Humidity</strong>: {this.props.humidity} <br/>
			<strong>Conditions</strong>: {this.props.description} <br/>
			
			</div>
			);
	}
}

export default Weather;