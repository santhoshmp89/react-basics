import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CustomVal extends Component {
	render() {
		return <CustomValElement value="Custom Validation"/>
	}	
}


const CustomValElement = (props) => {
	return (
		<p> Props validation - {props.value} </p>
	)
}

CustomValElement.propTypes = {
	value(props, propName, component) {
		if(! (propName in props)) {
			return new Error(`Missing ${propName}`);
		}

		if(props[propName].length > 10) {
			return new Error(`${propName} Props has more character`);
		}
	}
}

export {CustomVal};