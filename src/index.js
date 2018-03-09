import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './index.css';
import CreateGameScreen from './screens/CreateGameScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Results from './screens/ResultScreen';
import registerServiceWorker from './registerServiceWorker';
const App = () => (
    <Router>
      <div>
        <Route exact path = "/" component={HomeScreen}/>
        <Route path = "/CreateGameScreen" component={CreateGameScreen}/>
        <Route path = "/LoginScreen" component={LoginScreen}/>
        <Route path = "/Results" component={Results}/>
      </div>
    </Router>
  )

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
