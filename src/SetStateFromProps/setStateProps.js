import React, {Component, Fragment} from 'react';

export default class ParentState extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value : 1
		}

		this.clickHand = this.clickHand.bind(this);
	}

	clickHand() {
		this.setState({
			value: this.state.value + 1
		})
	}

	componentWillUpdate(nP, nS) {
		console.log(`Parent Component : Current State : ${this.state.value} , next Props : ${nS.value}`)
	}

	render() {
		return(
			<Fragment>
				<button onClick={this.clickHand}>Change State</button>
				<p>Parent Component Value : {this.state.value} </p>
				<ChilsState value={this.state.value} />				
			</Fragment>
		)
	}
}	

class ChilsState extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value : this.props.value
		}
	}

	componentWillReceiveProps(prop) {
		console.log(`Child Component Props receives ${prop.value}`)
	}

	render() {
		console.log(` Child Props : ${this.props.value}`);
		console.log(` Child State : ${this.state.value}`);
		return(
			<div>
				{this.state.value}
			</div>
		)
	}
}