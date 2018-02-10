import React,{Component, Fragment, PureComponent} from 'react';

class Button extends Component{

	constructor(props) {
		super(props)
	}

	componentWillReceiveProps(nxtProps) {
		console.log('componentWillReceiveProps')
		console.log(nxtProps)
	}	

	componentDidUpdate(prev) {
		console.log('componentDidUpdate', prev)
	}

	render() {
		console.log(this.props.value)
		return(
			<button onClick={this.props.onClick}>{this.props.value}</button>
		)
	}
	
}


export default class CounterButton extends PureComponent{
	constructor(){
		super();
		this.clickCounter = this.clickCounter.bind(this);
	}

	clickCounter() {
		this.setState({
			value: this.state.value + 1
		})
	}

	componentWillMount() {
		this.setState({
			value:1,
			value1:1,
			value2:2
		})
	}

	componentWillUpdate() {
		console.log('componentWillUpdate')
	}	

	/*shouldComponentUpdate(props, stats) {
		console.log(props, stats)
		if(this.state.value === stats.value) {
			return false
		}
		return true
	}*/

	render() {
		return(
			<Fragment>
			<Button value={this.state.value} onClick={this.clickCounter}/>
			<Button value={this.state.value1} />
			<Button value={this.state.value2} />
			</Fragment>
		)
	}

}

export class OneCounter extends Component {
	constructor() {
		super();
		this.state={
			value:1
		}
		this.clickCounter = this.clickCounter.bind(this);
	}

	clickCounter() {
		this.setState({
			value: this.state.value + 1
		})
	}

	componentWillReceiveProps(props) {
		console.log("One more ", props)
	}

	render() {
		return(
			<Button value={this.state.value} onClick={this.clickCounter} />			
		)
	}
}