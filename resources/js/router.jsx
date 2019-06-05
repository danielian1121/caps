import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom'

import Dashboard from './components/Schema/dashboard.jsx'

function Home(){
	return(
			<div>
				<h1>Home</h1>
			</div>
		)
}

function NotFound(){
	return(
			<div>
				<p>The Url is broken or something went wrong!</p>
				<p>Click to return home <Link to="/" className="btn btn-sm btn-secondary">return</Link></p>
			</div>
		)
}

export default function SchemaRouter(){
	return (
			<Router basename="/app">
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/dashboard" component={Dashboard}/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
}