
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';


export class CounterMount extends Component{
	constructor() {
		super();
		this.state = {
			value: 1
		}
		this.counterCount= this.counterCount.bind(this);
		this.counterCountUnMount = this.counterCountUnMount.bind(this);
		this.update =this.update.bind(this);
		
	}

	update() {
		console.log('setInterval called');
		console.log(this.state.value)
		this.setState({
			value: this.state.value + 1
		})
	}

	counterCount() {		
		ReactDOM.render(<CounterButton name={this.state.value} onMount={this.update} />, document.getElementById('counterDiv'))
	}

	counterCountUnMount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('counterDiv'));
	}

	render() {
		return(
			<Fragment>
				<CounterButton name="Mount" onClick={this.counterCount}/>				
				<CounterButton name="Unmount" onClick={this.counterCountUnMount}/>
				<div id="counterDiv"></div>
			</Fragment>			
		)
	}
}

class CounterButton extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		console.log("componentDidMount");	
		this.setInvetvalFunc = setInterval(this.props.onMount, 1000);
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps, "New Props");
	}

	componentWillUnmount() {
		console.log('Component Unmounted');
		clearInterval(this.setInvetvalFunc);		
	}

	render() {
		return(
			<button onClick={this.props.onClick}>
				{this.props.name}
			</button>
		)
	}
}