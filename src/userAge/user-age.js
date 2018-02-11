import React, {Component, Fragment} from 'react';

class UserProfile extends Component {
	constructor(props){
		super(props)
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	shouldComponentUpdate(nxP, nxS) {
		console.log(nxP.age > 10)
		return ( nxP.age > 10);
	}

	render() {
		return(
			<div>			
			Name: {this.props.name} and Age: {this.props.age} </div>
		)
	}
	
}

export class UsersList extends Component{
	constructor() {
		super();
		this.state = {
			user: [
				{name: "Santhosh", age: 29},
				{name: "Kumar", age: 31},
				{name: "Assssssd", age:43}
			],
			title: 'Users List'
		}
		this.makeYounger = this.makeYounger.bind(this);
	}

	makeYounger = () => {

		//console.log(this.state);

		var newState = this.state.user.map((ele)  => {
			const temp = ele;
			if(temp.age > 10)	 {
				temp.age -= 10;
			}
			return temp;

		})

		/*console.log(newState);
		console.log(this.state);*/

		this.setState({
			user: newState
		})
	}

	/*shouldComponentUpdate(nxtProps, nxtState) {
		//console.log(nxtState, this.state);
		console.log(nxtState.user.age)
		if(nxtState.user.age > 10) {
			return true
		} 

		return false
	}*/

	/*componentWillUpdate(props, state) {
		console.log(this.state);
		console.log(state);
	}*/

	render() {
		return(
			<Fragment>
			<h4>{this.state.title}</h4>

			<button onClick={this.makeYounger} >Make user age younger </ button>

			{/*<UserProfile name={this.state.user[0].name} age={this.state.user[0].age}  />
			<UserProfile name={this.state.user[1].name} age={this.state.user[1].age}  />
			<UserProfile name={this.state.user[2].name} age={this.state.user[2].age}  />*/}
			{this.state.user.map((items) => {
				return <UserProfile name={items.name} age={items.age} />
			})}

			</Fragment>
		)
	}
}