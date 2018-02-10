import React, {Component} from 'react';


export class CompLifeCycle extends Component {
	constructor() {
		super()
		this.state = {
			inputVal: '',
			status: false
		}
		this.updateText = this.updateText.bind(this);
		this.deleteComp = this.deleteComp.bind(this);
		this.copyPaste = this.copyPaste.bind(this);
	}

	componentWillMount() {
		this.setState({
			inputVal: "Component will mount"
		})

		console.log('Component will mount')
	}

	updateText(e){
		this.setState({
			inputVal: e.target.value
		})
	}

	copyPaste() {
		this.setState({
			status: true
		})
	}

	deleteComp() {
		this.setState({
			status: false
		})
	}

	render() {

		const childEle = this.state.status? <SpanChild value={this.state.inputVal} name={null} /> : '';
		console.log('Component Render')
		return(
			<div>
				<input type="text" value={this.state.inputVal} onChange={this.updateText} />
				<button onClick={this.copyPaste}>Copy and Paste</button>
				<button onClick={this.deleteComp}>Delete</button>
				{childEle}
			</div>
		)


	}

	componentDidMount() {
		this.setState({
			inputVal: "Component did mount"
		})
		console.log('Component did mount')
	}

	componentWillUpdate() {
		console.log('Component will update')
	}

	componentDidUpdate() {
		console.log('Component did update')
	}
}


class SpanChild extends Component {
	constructor(props) {
		super(props);		
	}

	render() {
		return(
			<div>
				<span>{this.props.value}</span>
				<div>Default Props {this.props.name}</div>

				<OneMoreChild />
			</div>
		)
	}
}

SpanChild.defaultProps = {
	name: "Yes"
};


class OneMoreChild extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		return(
			<div>
				Without state value - {this.state.value}
			</div>
		)
	}
}