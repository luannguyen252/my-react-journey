/***********************
	
This component acts as a container for the login screen and greeting. It is the very first component
that App.js renders. Initially, isLogged and accessToken states are false and null. Therefore, it 
first renders <AccountLogin/>. Its main responsibility is to decide which component to render and 
report this to its parent, App.js. 

Once AccountLogin component renders, we obtain an ugly URL that contains our access_token. In our 
componentDidMount method, we parse this URL and set it to state (along with isLogged state). At this 
moment, since we are logged in, our component renders <Greeting /> and passes accessToken props to it.

NOTE: If we can't obtain the URL, we wouldn't have access_token. Therefore, our component would 
render <AcountLogin /> again. However, this is not an endless loop! Since the generated link in
<AcountLogin /> makes the actual login request to Spotify, it has to be clicked by the user.

***********************/

import React, { Component } from 'react';
import AccountLogin from './AccountLogin';
import Greeting from './Greeting';
import * as spotifyFunctions from './functions/spotifyFunctions.js'

class LoginOrGreeting extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isLogged: false,
			accessToken: null
		}
	}

	componentDidMount() {
		const accessToken = spotifyFunctions.spotifyAccessTokenAuth();
		if (accessToken) {
			this.setState({
				isLogged: true,
				accessToken: accessToken
			})
			this.props.myState(true);
			this.props.myToken(accessToken);
		} else {
			this.setState({
				isLogged: false,
				accessToken: null
			})
			this.props.myState(false);
			this.props.myToken(null);
		}
	}

	render() {
		return (
			!this.state.isLogged ? <AccountLogin /> : <Greeting accessToken={this.state.accessToken} />
		);
	}
}

export default LoginOrGreeting;