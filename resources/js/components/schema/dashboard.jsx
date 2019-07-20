import React from 'react'
import {
	Route,
	Link
} from 'react-router-dom'

function AppManagement(){
	return(
		<h1>This is Application Management</h1>
	)
}

function UserManagement(){
	return(
		<h1>This is User Management</h1>
	)
}

export default (props) => {
	console.log(props.match.url)
	return(
		<div>
			<div>
				<Link to={`${props.match.url}/app`}>App</Link>
				<Link to={`${props.match.url}/user`}>App</Link>
			</div>
			<Route path={`${props.match.url}/app`}  component={AppManagement}/>
				<Route path={`${props.match.url}/user`}  component={UserManagement}/>
		</div>
	)
}
