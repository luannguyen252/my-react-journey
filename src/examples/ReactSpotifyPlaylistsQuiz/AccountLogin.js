/***********************
	
This simple presentational component mainly renders the login screen HTML. 
It is a child of <LoginOrGreeting /> and it's main responsibility is to make 
a login request to Spotify on user click. We see this component in action if:
    1. user logs in for the first time,
    2. login is unsuccessfull,
    3. spotify session expired.

***********************/

import React, { Component } from 'react';
import './AccountLogin.css';
import * as spotifyFunctions from './functions/spotifyFunctions.js'
import react_logo from './logos/react_logo.svg';
import spotify_logo from './logos/spotify_logo.svg';
import add from './logos/add.svg';

class AccountLogin extends Component {

  render() {
    return (
      <div className="col-md-12 AccountLogin">
        <div className="col-md-12">
          <h5 className="mb-5 mt-2">This app generates a simple quiz based on your Spotify playlists.</h5>
        </div>
        <div className="col-md-12">
          <img src={react_logo} className="AccountLogin-logo-react" alt="logo" />
          <img src={add} className="AccountLogin-add-sign" alt="logo" />
          <img src={spotify_logo} className="AccountLogin-logo-spotify" alt="logo" />
        </div>
        <div className="col-md-12 mt-5 mb-3">
          <a className="btn AccountLogin-link"
            href={spotifyFunctions.fromLoginUrl()}
          > Login to Spotify
          </a>
        </div>
        <p>
          <small className="AccountLogin-warning-note"><i>
            We will request authorization from Spotify only to view your <b>name</b>, <b>playlists</b> and their <b>tracks</b>.<br />
            None of this information will be recorded or shared with third parties.
          </i></small>
        </p>
      </div>
    );
  }
}

export default AccountLogin;