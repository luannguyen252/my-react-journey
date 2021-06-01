/***********************
	
This component is the mother of all components. It has one and only resposibility:
control the app flow. It is done via receiving props and callback props (react way 
of passing actions from parent to children).

Here is the flow diagram of this SPA:
  1. Render an unchanged header and a footer regardless of the app logic.
  2. Render <LoginOrGreeting /> and receive App's isLogged and token states.
  3. If islogged is true, render <GetUserPlaylists />, pass token as props and expect playlist id. Update selectedPlaylist state in the callback.
  4. If playlist id is received, render <GetPlaylistTracks />, pass token + selectedPlaylist as props and expect tracks array. Update tracks state in the callback.
  5. If tracks array has a length, render <CreateQuestions />, pass tracks array as props. (Last component doesn't have a callback).

NOTE TO SELF:
Once user completes all 5 questions, we could have used callback props to trigger 
quiz complete messages. Since this component manages the app flow, it would have been
better semantically. (On the other hand, I see no harm doing this way)

***********************/

import React, { Component } from 'react';
import './App.css';
import LoginOrGreeting from './LoginOrGreeting';
import GetUserPlaylists from './GetUserPlaylists';
import GetPlaylistTracks from './GetPlaylistTracks';
import CreateQuestions from './CreateQuestions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
      token: null,
      selectedPlaylist: '',
      tracks: []
    };
  }

  handleStateChange = (loginState) => {
    this.setState({
      isLogged: loginState,
    })
  }

  handleTokenChange = (tokenState) => {
    this.setState({
      token: tokenState,
    })
  }

  handlePlaylistChange = (playlistState) => {
    this.setState({
      selectedPlaylist: playlistState,
    })
  }

  handlePlaylistTracks = (tracksState) => {
    this.setState({
      tracks: tracksState,
    })
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="row">
            <div className="col-md-12">
              <h1 className="font-weight-bold text-center mt-5 title">Spotify Playlists Quiz</h1>
            </div>
          </div>
        </header>
        <main>
          <div className="row">
            <LoginOrGreeting
              myState={this.handleStateChange}
              myToken={this.handleTokenChange}
            />
            <div className="col-md-12">
              {this.state.isLogged ? <GetUserPlaylists myToken={this.state.token} myPlaylist={this.handlePlaylistChange} /> : null}
              {this.state.selectedPlaylist !== '' ? <GetPlaylistTracks myToken={this.state.token} myPlaylist={this.state.selectedPlaylist} myTracks={this.handlePlaylistTracks} /> : null}
              {this.state.tracks.length !== 0 ? <CreateQuestions myTracks={this.state.tracks} /> : null}
            </div>
          </div>
        </main>
        <footer>
          <div className="row">
            <div className="col-md-12 App-credential">
              <p className="mt-5">
                <small>
                  - Developed by
                <a
                    href="https://alitursucular.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  > Ali Tursucular
                </a>.
              </small>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;