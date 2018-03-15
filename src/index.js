import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './index.css';
import CreateGameScreen from './screens/CreateGameScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Results from './screens/ResultScreen';
import GameScores from './screens/PlayedGamesScreen'
import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <Router>
      <div>
        <Route exact path = "/" render={()=>{ return handleRoute(<HomeScreen/>)}}/>
        <Route path = "/CreateGameScreen" render={()=>{ return handleRoute(<CreateGameScreen/>)}}/>
        <Route path = "/LoginScreen" render={()=>handleLoginRoute()}/>
        <Route path = "/Results" render={(obj)=>handleRoute(<Results {...obj}/>)}/>
        <Route path = "/Games" render={()=>handleRoute(<GameScores/>)}/>
      </div>
    </Router>
  )


const handleRoute = (component) => {
  if(sessionStorage.isLoggedIn==='true'){
    return component
  } else {
    return <Redirect to='/LoginScreen'/>
  }
}

const handleLoginRoute = () => {
  if(sessionStorage.isLoggedIn==='true'){
    return  <Redirect to='/'/>
  } else {
    return <LoginScreen/>
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
