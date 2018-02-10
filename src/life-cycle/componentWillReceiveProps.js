import React, {Component} from 'react'

class ComponentWillReceiveProps extends Component {
	constructor() {
		super();
		this.status = false
	}

	componentWillReceiveProps(ac) {
		console.log('componentWillReceiveProps')
		console.log('Next props', ac);
		console.log('this props', this.props);

		if(ac.value == "") {
			this.status = true
		} else {
			this.status = false
		}

		console.log(this.status)
	}

	render() {
		/*if(this.status) {
			return (null)
		}*/
		console.log('render')
		return(
			<span>
				Total Array : <ul> <List arry={this.props.totalValue} /> </ul>
			</span>
		)
	}
}

const List = (props) => {
	return(
		props.arry.map((ele, index) => {
			return <li key={index}> {ele} </li>
		})
	)
}

export default class ParentComponentWillReceiveProps extends Component {
	constructor() {
		super()
		this.state = {
			value: '',
			totalValue: [1,2,3]
		}
		this.onchangeHan = this.onchangeHan.bind(this);
		this.addList = this.addList.bind(this);
	}

	onchangeHan(e) {
		this.setState({
			value: e.target.value
		})
	}

	addList(e) {
		console.log('add', this.input.value)
		var newArray = this.state.totalValue.concat(this.input.value)

		this.setState({
			totalValue: [...this.state.totalValue, this.input.value],	
			value: ""
		})		
	}

	render() {
		return(
			<div>
				<input type="text" value={this.state.value} onChange={this.onchangeHan} ref={input => this.input = input}/>
				<button onClick={this.addList}>Add</button>
				<ComponentWillReceiveProps value={this.state.value} totalValue={this.state.totalValue}/>				
			</div>
		)
	}
}







