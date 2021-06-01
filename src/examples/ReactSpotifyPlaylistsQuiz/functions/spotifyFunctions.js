import Spotify from "spotify-web-api-js";
const spotifyWebApi = new Spotify();

export function fromLoginUrl() {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "3c89e47259484dcb83163e8f47069497";
  const redirectUri = "https://alitursucular.github.io/spotify-playlists-quiz-with-react-demo";
  // This is the data we ask for. Spotify will prompt it to the user for permission.
  const scopes = [
    "playlist-read-private",
    "playlist-read-collaborative"
  ];
  return (
    authEndpoint + "?client_id=" + clientId + "&redirect_uri=" + redirectUri + "&redirect_uri=" + scopes.join("%20") + "&response_type=token&show_dialog=true`"
  );
}

export function spotifyAccessTokenAuth() {
  const params = getHashParams();
  const accessToken = params.access_token;
  if (!accessToken) {
    return false;
  } else {
    return accessToken;
  }
}

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export function setAccessToken(accessToken) {
  spotifyWebApi.setAccessToken(accessToken);
}

export async function getUserPlaylists() {
  try {
    const playlistsResponse = await spotifyWebApi.getUserPlaylists();
    const playlists = playlistsResponse.items.map((playlistObject) => {
      const { id, name } = playlistObject;
      return { id: id, playlistName: name };
    });
    return playlists;
  } catch (e) {
    // console.error("Error: Attempting to get user playlists", e);
    // console.error(e.stack);
    return [{ id: null, playlistName: "We can't receive your playlists! Please login again.." }];
  }
}

export async function getUsername() {
  try {
    const bulkUserData = spotifyWebApi.getMe();
    return Promise.resolve(bulkUserData);
  } catch (e) {
    console.error('Catched error: ', e);
    console.error(e.stack);
  }
}

/***********************

NOTE TO SELF: We could have done the above function as below.
 
export async function getUsername() {
  const bulkUserData = spotifyWebApi.getMe();
  return Promise.resolve(bulkUserData)
}

getUsername().catch(e => console.error('Catched', e));

***********************/

export async function getSimplePlaylistTracks(playlistId) {
  try {
    const tracks = await spotifyWebApi.getPlaylistTracks(playlistId);
    const simpleTracks = tracks.items.map((trackObject) => {
      const track = trackObject.track;
      const album = trackObject.track.album;
      const artist = trackObject.track.artists[0];
      return {
        artistName: artist.name,
        albumName: album.name,
        trackName: track.name,
      };
    });
    return simpleTracks;
  } catch (e) {
    console.error("Error: Attempting to get playlist tracks", e);
    console.error(e.stack);
  }
}