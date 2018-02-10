import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonContent} from './Button';
import {CustomVal} from './CustomValidationProps';
import {FocusForm as FocusableForm, RefForm, InputList, ParentFor} from './Ref-Example';
import {CompLifeCycle} from './component-life-cycle-2';
import {Employee} from './life-cycle/componentWillMount';
import ParentProps from './props-passing';
import ParentWillReceiveProps from './life-cycle/componentWillReceiveProps';
import {ParentFrag} from './fragment-com';
import {DidMountParent, CounterParent} from './life-cycle/componentDidMount';
import {ShouldUpdateParent} from './life-cycle/shouldComponentUpdate';
import {CounterMount} from './life-cycle/componentDidMount-counter';
import PureComponent from './pure-components';
import LifeCycleCounter, {OneCounter} from './life-cycle/Counter-with-lifecycle';

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

         <br /><br />

         <hr />

         <FocusableForm />

         <RefForm />  

         <br /><br />

         <hr />

         <p> Refs with instance of component</p>

          <InputList />         
          -------------------------------------

          <p> Refs with stateless component</p>

          <ParentFor />

          <br /><br />

          <hr />

          <p>Component Life Cycle</p>

          <br />
              <CompLifeCycle />
          <hr />
          <p> 1. componentWillMount</p>

          <Employee />

          <br /><br />

          <hr />

          <p> Passing props to child component</p>

          <ParentProps />

          <br /><br />

          <hr />

          <p> componentWillReceiveProps Example</p>

          <ParentWillReceiveProps />

          <br /><br />

          <hr />

           <p> Frangment Example</p>
          <ParentFrag />

           <br /><br />

          <hr />

          <p> componentDidMount Example</p>
            
            <DidMountParent />

           <br /><br />

          <hr />

          <p> shouldComponentUpdate Example</p>

          <ShouldUpdateParent />

          <br /><br />

          <hr />

          <p>Component With counter setinterval</p>
          <CounterMount />

          <br /><br />

          <hr />
          

          <p>--------------------------------------</p> 
          <p>Pure COmponent</p>

          <PureComponent />

          <br /><br />

          <hr />

          <LifeCycleCounter />
          <OneCounter />
          <br /><br />

          <hr />
          
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