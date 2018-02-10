import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DidMountChild extends Component {

	componentDidMount(){
		console.log('Child Component Mounted')
		console.log(ReactDOM.findDOMNode(this), "Component Did Mount")
	}

	render() {
		return(
			<div>{this.props.name}</div>
		)		
	}

}


export class DidMountParent extends Component {
	componentDidMount(){
		console.log('Parent Component Mounted')
	}

	render() {
		return(
			<DidMountChild name='Component Did Mount' />
		)		
	}
}


export class MainComponent extends Component {
	MountComponent() {
		ReactDOM.render(<CounterParent />, document.getElementById('CounterComponent'));
	}

	render() {
		return(
			[
				<CounterParent />,
				<button onClick={this.MountComponent.bind(this)}>Mount Component</button>
			]
		)
	}
}


export class CounterParent extends Component{
	constructor(props) {
		super(props);
		this.state = { 	
			number: 1
		}
		this.updateCounter = this.updateCounter.bind(this);
		this.unmountComp = this.unmountComp.bind(this);
	}

	updateCounter() {
		this.setState({
			number: this.state.number + 1
		})
	}

	unmountComp() {
		ReactDOM.unmountComponentAtNode(document.getElementById('CounterComponent'));
	}

	render() {
		return(
			[
				<CounterButton name={this.state.number * 2} onClickhand = {this.updateCounter}/>,
				<CounterButton name='Unmount' onClickhand= {this.unmountComp}/>
			]
		)				
	}
}


class CounterButton extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button onClick={this.props.onClickhand} >
				{this.props.name}
			</button>
		)		
	}
}


