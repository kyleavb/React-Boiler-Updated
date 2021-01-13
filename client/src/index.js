import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './major/NavBar';
import Landing from './major/Landing';
import Page2 from './major/page2';

ReactDOM.render(
	<React.StrictMode>
		<div className="main">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/' render={ (props) => <Landing {...props} /> } />
					<Route exact path='/page2' render={ (props) => <Page2 {...props} /> } />
				</Switch>
			</Router>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);
