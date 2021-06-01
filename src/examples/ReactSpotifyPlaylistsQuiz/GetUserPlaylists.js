/***********************
	
This component is not only container but also, presentational. We could have split it,
but for some reason I made it this way... 

<GetUserPlaylists /> is triggered by isLogged state in App.js (its parent) Its 
responsibilities are:
    1. getting user playlists from Spotify,
    2. displaying them in a form of HTML select element,
    3. making a callback to its parent for the selected playlist id,
    4. staying alert for playlist changes made by the user, and repeat above.

NOTE: We have an explanation about usage of componentDidUpdate method in <CreateQuestions />  

***********************/

import React, { Component } from 'react';
import * as spotifyFunctions from './functions/spotifyFunctions.js';
import './GetUserPlaylists.css';

class GetUserPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            selectedPlaylist: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        this.setState({
            selectedPlaylist: e.target.value,
        })
        this.props.myPlaylist(e.target.value);
    }

    async componentDidMount() {
        await spotifyFunctions.setAccessToken(this.props.myToken);
        const playlists = await spotifyFunctions.getUserPlaylists();
        this.setState({
            playlists: playlists
        });
    }

    renderListItems = () => {
        const playlistItems = this.state.playlists.map((o) => <option key={o.id} value={o.id}>{o.playlistName}</option>);
        return (
            playlistItems
        );
    }

    render() {
        return (
            <select className="form-control" onChange={this.handleSelect}>
                <option key="0" value=''>Choose your playlist!</option>
                {this.renderListItems()}
            </select>
        );
    }
}

export default GetUserPlaylists;