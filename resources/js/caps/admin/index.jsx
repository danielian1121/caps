import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom'

import Edit from './welcomePage/edit'

function NotFound(){
	return(
		<div>
      <h1>123</h1>
		</div>
	)
}

export default ({ match }) =>{
	return (
    <div style={{height: '100%'}}>
      <Route exact path={match.path} render={() => <h1>Add admin index page</h1>}/>
      <Route path={`${match.url}/welcome`} component={Edit}/>
    </div>
	)
}