import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateGameScreen from './screens/CreateGameScreen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CreateGameScreen />, document.getElementById('root'));
registerServiceWorker();
