import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import CreateGameScreen from './screens/CreateGameScreen';
import HomeScreen from './screens/HomeScreen';
import registerServiceWorker from './registerServiceWorker';
const App = () => (
    <Router>
      <div>
        <Route exact path = "/" component = {HomeScreen}/>
        <Route path = "/CreateGameScreen" component = {CreateGameScreen}/>
      </div>
    </Router>
  )

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
