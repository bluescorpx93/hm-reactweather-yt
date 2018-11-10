import React from 'react';

class Weather extends React.Component{
	render(){
		return(
			<div>
	
				{ this.props.city && this.props.country && <p> <strong>Location:</strong> {this.props.city}, {this.props.country} </p> } 

				{ this.props.temperature && <p> <strong>Temperature</strong>: {this.props.temperature} </p> } 

				{ this.props.humidity && <p> <strong>Humidity</strong>: {this.props.humidity} </p> } 

				{ this.props.description && <p> <strong>Conditions</strong>: {this.props.description} </p> } 

				{ this.props.error && <p> <strong>Error</strong>: {this.props.error} </p> } 

			</div>
		);
	}
}

export default Weather;