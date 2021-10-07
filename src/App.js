import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import logo from './assets/images/logo.png';

import LandingPage from './Components/LandingPage';
import CreateSurvey from './Components/CreateSurvey';
import TakeSurvey from './Components/TakeSurvey'

function App() {
	return (
		<div className="App">
			<img src={logo} alt="logo" />
			<Switch>
				<Route path="/" component={LandingPage} exact/>
				<Route path="/create" component={CreateSurvey} />
				<Route path="/take" component={TakeSurvey} />
			</Switch>
		</div>
	);
}

export default App;