import React, {Component} from 'react';

class ShouldUpdateChild extends Component {
	constructor(props) {
		super(props);
		this.state= {
			name: ""
			
		}
	}

	childClick() {
		this.setState({
			name: 'Should Component Update'
			
		})
		
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', nextProps);

		if(this.props.name === nextProps.name) {
			this.setState({
				name: 'componentWillReceiveProps'
			})
		}

	}

	shouldComponentUpdate(nextPro, nextST) {
		console.log(`prevProps: ${this.props.name}, nextPro: ${nextPro.name}, prevSt: ${this.state.name}, nextST: ${nextST.name}`)
		return true
	}

	render(){
		return(
			<React.Fragment>
			<button onClick={this.childClick.bind(this)}>Child ShouldUpdateChild</button>
			<br />Children state: {this.state.name}
			<br />Props: {this.props.name}	
			<br />Child own Props {this.props.value}
			<br /> State as Props: {this.props.stateAsProps}
			</React.Fragment>
		)
	}
} 

ShouldUpdateChild.defaultProps = {
	value: "Kumar"
}

export class ShouldUpdateParent extends Component{

	constructor() {
		super();
		this.state = {
			name: "assa",
			stateAsProps: ""
		}
	}
	
	shouldComponentUpdate(nextST, nextPro) {
		//console.log(nextST, nextPro)
		return true;
	}

	parentClick() {
		this.setState({
			name: "Parent Update",
			stateAsProps: "State as props changed"
		})
	}

	render() {
		return(
			<React.Fragment>
				<button onClick={this.parentClick.bind(this)} > Parent ShouldUpdateChild </button>
				<ShouldUpdateChild name={this.state.name} stateAsProps={this.state.stateAsProps}/>
			</React.Fragment>
		)
	}
}