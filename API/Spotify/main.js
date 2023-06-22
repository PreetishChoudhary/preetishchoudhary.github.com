function Oauth(){
    const clientId = 'd9a800ac4ead4627ab1280e84dc5593c';
    const redirectUri = 'https://preetishchoudhary.github.io/API/Spotify/callback.html';
    const responseType = 'token';
    const scopes = 'user-read-private user-read-email user-read-playback-state user-read-recently-played user-modify-playback-state'; // Add the required scopes

    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

    window.location.href = authorizationUrl;
}

window.addEventListener('DOMContentLoaded', function() {
  var accessToken = localStorage.getItem('spotifyAccessToken');
    GetUserData();
    GetPlayData();
});

function GetUserData(){}
    fetch('https://api.spotify.com/v1/me', {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('spotifyAccessToken'),
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
          // Access the user data
            var username = data.display_name;
            var userID = data.id;
            var profilePicture = data.images[0].url;
    
          // Do something with the username and profile picture
          document.getElementById("username").innerHTML = username + " • " + userID;
          document.getElementById("ProfilePicture").src = profilePicture;
        })
        .catch(error => {
          console.error('Error:', error);
        });

function GetPlayData(){
    fetch('https://api.spotify.com/v1/me/player', {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('spotifyAccessToken'),
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
          // Access the user data
            if(data.is_playing){
                var currentPlaying = data.item.name;
                var currentArtist = data.item.artists[0].name;
                var currentDevice = data.device.name;
                var popularity = data.item.popularity; document.getElementById("playingText").innerHTML = currentPlaying + " • " + currentArtist + " • " + currentDevice + "  " + popularity;
            }
            else{
                document.getElementById("Final").innerHTML = "Player Offline";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("Final").innerHTML = "Player Offline"
        });
}
