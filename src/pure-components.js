
import React, {Component, PureComponent} from 'react';

export default class PureComponents extends PureComponent {
	constructor() {
		super();
		this.state = {
			value: 1
		}
	}

	componentDidMount() {
		console.log("Pure component componentDidMount")
		setInterval(() => {
			this.setState({value: 1})
		},1000)
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('this.state.value ', this.state.value);
	// 	console.log('Next state value', nextState.value);
	// 	if(this.state.value === nextState.value) {
	// 		return false;
	// 	}

	// 	return true;
	// }

	render() {
		console.log("render method called")
		return(
			<Child value={this.state.value} />
		)
	}

}


var Child = function(props) {
	console.log('Child called')
	return(
		<div>{props.value}</div>
	)
}