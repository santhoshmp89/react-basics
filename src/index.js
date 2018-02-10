import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {CompToggle} from './component-life-cycle';
import registerServiceWorker from './registerServiceWorker';
import Unmount from './life-cycle/componentWillUnmount';
import {DidMountParent, CounterParent, MainComponent} from './life-cycle/componentDidMount';

ReactDOM.render(<App value={232} />, document.getElementById('root'));
ReactDOM.render(<CompToggle />, document.getElementById('componentLifeCycle'))
ReactDOM.render(<Unmount />, document.getElementById('ComponentUnmount'))
ReactDOM.render(<CounterParent />, document.getElementById('CounterComponent'))
ReactDOM.render(<MainComponent />, document.getElementById('CounterComponent'))

registerServiceWorker();
