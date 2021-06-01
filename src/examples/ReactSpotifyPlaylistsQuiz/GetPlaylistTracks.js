/***********************
	
This component is a pure container component. It has nothing to render so, it is
not responsible for any type of UI presentation. It receives accessToken and the
selected playlist as props from its parent App.js. It's resposibilities are:
    1. get all tracks of the selected playlist,
    2. clean this tracklist data and set state,
    3. return this clean array of tracks to the parent,
    4. be responsive for playlist changes (if props changes), and repeat above.

NOTE: We have an explanation about usage of componentDidUpdate method in <CreateQuestions />  

***********************/

import { Component } from 'react';
import * as spotifyFunctions from './functions/spotifyFunctions.js'

class GetPlaylistTracks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playlistTracks: []
        }
    }

    async fetchTracks(receivedPlaylistId) {
        const RAWplaylistTracks = await spotifyFunctions.getSimplePlaylistTracks(receivedPlaylistId);
        const CLEANtracksList = RAWplaylistTracks.map((o) => o.artistName + "+" + o.albumName + "+" + o.trackName);

        this.setState({
            playlistTracks: CLEANtracksList
        });
        this.props.myTracks(this.state.playlistTracks);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.myPlaylist !== this.props.myPlaylist) {
            this.fetchTracks(this.props.myPlaylist);
        }
    }

    async componentDidMount() {
        await spotifyFunctions.setAccessToken(this.props.myToken);
        this.fetchTracks(this.props.myPlaylist);
    }

    render() {
        return null;
    }
}

export default GetPlaylistTracks;