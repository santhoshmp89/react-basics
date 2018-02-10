import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MountComp extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<button onClick={this.props.mountComp} >Mount</button>
		)
	}

}

class UnmountComp extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<button onClick={this.props.unmountComp} >Unmount</button>
		)
	}
}

class ShowComp extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<h2> App Component</h2>
		)
	}
}

export class CompToggle extends Component {
	constructor(props) {
		super(props)
		this.mountComp = this.mountComp.bind(this);
		this.unmountComp = this.unmountComp.bind(this);
	}

	mountComp() {
		console.log('Click mount')
		ReactDOM.render(<ShowComp />, document.getElementById('toggle'))
	}

	unmountComp() {
		console.log('Click unmount')
		ReactDOM.unmountComponentAtNode(document.getElementById('toggle'));
	}

	render() {
		return(
			<div>
				<MountComp mountComp={this.mountComp} />
				<UnmountComp unmountComp={this.unmountComp} />
				<div id="toggle"> </div>
			</div>
		)
	}
}
