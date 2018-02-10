import React, {Component} from 'react';


class FocusForm extends Component {
	constructor(props) {
		super(props);
		this.FocusableForm = this.FocusableForm.bind(this);
	}

	FocusableForm() {
		this.input.focus();
		console.log(this.input.value)
	}


	render() {
		return(
			<form>
				<input type='text' ref={(input) => this.input = input}/>
				<button type="button" onClick={this.FocusableForm}>Change Focus</button>
			</form>			
		)
	}
}


export class RefForm extends Component {
	constructor(props) {
		super(props);
		this.RefUpdate = this.RefUpdate.bind(this);
		this.updateChange = this.updateChange.bind(this);
		this.state = {
			inputVal : "Some Text"
		}
	}

	componentDidMount() {
		console.log(this.RefUpdate());
	}

	componentWillUpdate() {
		console.log(this.RefUpdate(), "Component will update");
	}

	updateChange() {
		this.setState({
			inputVal: this.refs.name.value
		})
	}

	RefUpdate() {
		console.log(this.refs.name.value)
	}

	render() {
		return(
			<form>
				<input type="text" value={this.state.inputVal} ref='name' onChange={this.updateChange}/>
				<button onClick={this.RefUpdate} type="button">Submit</button>
				
			</form>
		)
	}
	
}



export class InputList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a : ''
		}
		this.updateChange = this.updateChange.bind(this);
	}

	updateChange(e) {
		this.setState({
			a: this.aa.refs.input.value
		})
	}

	render() {
		return(
			<div>
			<InputEle ref={component => this.aa = component} updateCh={this.updateChange} />
			{this.state.a}
			</div>
		)
	}
}	


class InputEle extends Component {
	render() {
		return(
			<input type="text" ref="input"  onChange={this.props.updateCh}/>
		)
	}
	
}



export class ParentFor extends Component {
	constructor() {
		super()
	}

	render() {
		return(
			<ChildInput update={(el) => this.input = el}/>
		) 
	}

	componentWillMount() {
		console.log('componentWillMount')
	}

	componentDidMount() {
		console.log(this.input)
		this.input.focus();
	}
}

const ChildInput = (props) => {
	return(
		<input type="text" ref={props.update}/>
	)
}



export {FocusForm}