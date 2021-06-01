/***********************

This is another simple component and a child of <LoginOrGreeting />. It renders 
the welcome message. In addition to that, it displays how many playlists found 
in users Spotify account. (*Note that, we could split this component further. 
Currently, it does not only render the HTML, but also fetches name, surname and 
number of playlists through its lifecycle method).

***********************/
    
import React, { Component } from 'react';
import './Greeting.css';
import * as spotifyFunctions from './functions/spotifyFunctions.js'

class Greeting extends Component {

    constructor(props) {
        super(props)
        this.classes = props;
        this.state = {
            playlistCount: 0,
            username: ''
        }
    }

    isMoreThanOne = () => {
        const playlistCount = this.state.playlistCount;
        return (playlistCount > 1 ? 's' : '');
    }

    async componentDidMount() {
        await spotifyFunctions.setAccessToken(this.props.accessToken);
        const playlists = await spotifyFunctions.getUserPlaylists();
        const bulkUserData = await spotifyFunctions.getUsername();

        this.setState({
            username: bulkUserData.display_name,
            playlistCount: playlists.length
        });
    }

    render() {
        return (
            <div className="col-md-12 mt-5 Greeting">
                <h2 className="mb-4">Hello <span>{this.state.username}</span>!</h2>
                <p className="mb-4">We found <span>{this.state.playlistCount} playlist{this.isMoreThanOne()}</span> in your Spotify account.<br />
                    Choose one from the following dropdown menu and start your quiz!</p>
            </div>
        );
    }
}

export default Greeting;