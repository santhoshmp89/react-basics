import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonContent} from './Button';
import {CustomVal} from './CustomValidationProps'

class App extends Component{

  constructor(){
    super();
    this.state = {
      stValue: "State"
    }
  }

  inputChange(e) {
    this.setState({
      stValue: e.target.value
    })
  }

  static defaultProps = {
    txt: "Class defaultProps"    
  }

  render() {
    return(
      <div>
         <input type='text' value={this.state.stValue} onChange={this.inputChange.bind(this)} />
         <h1>{this.props.txt} {this.props.value}</h1>
         <p>{this.state.stValue}</p>
         <hr />
         <p>Nested Data with props.children</p>

         <Button> &hearts;</Button>
         <ButtonContent />

         <br /><br />

         <hr />

         <CustomVal />
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  value: PropTypes.number.isRequired
}

/*App.defaultProps = {
  txt: "Default Props"
}*/

/*var App = () => <h2> Hello World!</h2> */




export {App};