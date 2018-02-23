import React from 'react';

const FormStateless = props => (
	<form onSubmit={props.getWeatherFunc}>
		<input type='text' name='city' placeholder='City' />
		<input type='text' name='country' placeholder='Country' />
		<button type='submit'> Search </button>
	</form>
)

export default FormStateless;