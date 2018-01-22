import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App value={232} />, document.getElementById('root'));
registerServiceWorker();
