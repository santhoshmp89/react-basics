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
			title: 'Users List',
			filter: ""
		}
		this.makeYounger = this.makeYounger.bind(this);
		this.filterValue = this.filterValue.bind(this);
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

	filterValue(e) {
		console.log(e.target.value);
		this.setState({
			filter: e.target.value
		})
	}

	render() {

		var items = this.state.user;

		if(this.state.filter) {
			items = items.filter((item) => {
				return item.name.toLowerCase().includes(this.state.filter.toLowerCase());
			})
		}

		return(
			<Fragment>
			<h4>{this.state.title}</h4>

			<button onClick={this.makeYounger} >Make user age younger </ button>

			{/*<UserProfile name={this.state.user[0].name} age={this.state.user[0].age}  />
			<UserProfile name={this.state.user[1].name} age={this.state.user[1].age}  />
			<UserProfile name={this.state.user[2].name} age={this.state.user[2].age}  />*/}
			<br />
			<input type="text" value={this.state.filter} onChange={this.filterValue} />
			<br />
			{items.map((item) => {
				return <UserProfile name={item.name} age={item.age} />
			})}

			</Fragment>
		)
	}
}