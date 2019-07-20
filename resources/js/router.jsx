import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom'

import Dashboard from './components/schema/dashboard'
import Home from './caps/index'
import Edit from './caps/admin/welcomePage/edit'
import Admin from './caps/admin/index'

function NotFound(){
	return(
		<div>
			<p>The Url is broken or something went wrong!</p>
			<p>Click to return home <Link to="/" className="btn btn-sm btn-secondary">return</Link></p>
		</div>
	)
}

export default () =>{
	return (
		<Router basename='/app'>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/admin' component={Admin}/>
				<Route path='/dashboard' component={Dashboard}/>
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}