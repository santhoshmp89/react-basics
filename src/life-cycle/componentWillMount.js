import React, {Component} from 'react';

export class Employee extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Santhosh',
			age: 29,
			ageMode: undefined
		}
	}

	componentWillMount() {
		let ageMode;

		if(this.state.ageMode > 70) {
			ageMode = 'Old'
		} else if (this.state.ageMode < 18 ) {
			ageMode = 'Teenge'
		} else {
			ageMode = 'Middle'
		}

		this.setState({
			ageMode
		})

		console.log("componentWillMount called")
	}

	render() {
		return(
			<Person name={this.state.name} age={this.state.age} ageMode = {this.state.ageMode}/>
		)
	}
}

class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: ''
		}
	}

	componentWillMount() {
		if(this.props.age < 30) {
			this.setState({
				status: "You are Youth"
			})
		}
	}

	render() {
		return(
			<div>
				<span>
					{this.props.name} 
				</span>

				<span>
					{this.props.age} 
				</span>

				<span>
					{this.props.ageMode} 
				</span>

				<span>
					{this.state.status} 
				</span>
			</div>
		)
	}
}