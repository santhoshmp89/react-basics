import React, {Component, PureComponent} from 'react';

const ShouldChild = (props) => {
	return(
		<div onClick={props.onClick}>{props.name.age}</div>
	)
}


export class ShouldParent extends Component{
	constructor(){
		super();
		this.state = {
			name: [
				{age: 29, name: "santhosh"}
			]
		}

		/*this.state = {
			name: {
				first: "santhosh",
				last: "Kumar"
			}
		}*/

		this.eventHand = this.eventHand.bind(this);
		
	}

	eventHand() {

		const newStates = this.state.name.map((val) => {
			let temp = val;
			val.age += 1;
			return val;
		})

		console.log(this.state);
		console.log(newStates)

		
		this.setState({
			name: newStates
		})

		/*this.setState({
			name: {
				first: this.state.name.first + "Kumar",
				last: this.state.name.last
			}
		})*/
	}

	shouldComponentUpdate(nxtProps, nxtState) {
		/*console.log('Should Component Update');
		console.log(nxtState, this.state);
		if(nxtState.name[0].age == this.state.name[0].age) {
			return false
		}
		return true;*/

		/*console.log('Should Component Update');
		console.log(nxtState, this.state);*/
		return true;
	}

	render() {
		return(
			<ShouldChild  name={this.state.name[0]} onClick={this.eventHand}/>
			/*<ShouldChild  name={this.state.name.first} onClick={this.eventHand}/>*/
		)
	}
}