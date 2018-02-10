import React, {Component} from 'react';


class ChildProps extends Component {
	constructor(props) {
		super(props);
		this.state={
			value: ''
		}

		this.changeInput = this.changeInput.bind(this);
	}

	componentDidMount() {
		console.log('componentDidMount props')
		this.setState({
			value: this.props.value
		})
	}

	changeInput(e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
		return(
			<input type='text' value={this.state.value} onChange={this.changeInput}/>
		)
	}
}

export default class ParentProps extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<ChildProps value={this.props.value} />
		)
	}
}

ParentProps.defaultProps = {
	value: 'Some Text'
}