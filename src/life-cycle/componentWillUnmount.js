import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class WillUnmount extends Component {
	constructor(){
		super();

		this.clickunmount = this.clickunmount.bind(this);
	}

	componentWillUnmount() {
		console.log('Parent Component unmounted');
	}

	clickunmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('ComponentUnmount'));
	}

	render() {
		return(
			<ChildWillUnmount clickunmount={this.clickunmount} />	
		)
	}
}

class ChildWillUnmount extends Component{
	componentWillUnmount() {
		console.log('Child Component unmounted');
	}

	render() {
		return(
			<button onClick={this.props.clickunmount}>
				WillUnmount
			</button>
		)
	}
}