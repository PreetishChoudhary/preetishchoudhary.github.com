function callAPI(){
    var client_id = "d9a800ac4ead4627ab1280e84dc5593c";
    var client_secret = "504ddde2f7c64fdeb6ec0a6f96c14e30";
    fetch("https://accounts.spotify.com/api/token",{
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => response.json)
        .then(response => {
            document.getElementById("Test").innerHTML = response.access_token
        })
}

function Oauth(){
    const clientId = 'd9a800ac4ead4627ab1280e84dc5593c';
    const redirectUri = 'https://preetishchoudhary.github.io/API/Spotify/callback.html';
    const responseType = 'token';
    const scopes = 'user-read-private user-read-email'; // Add the required scopes

    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

    alert('Redirecting...')
    // Redirect the user to the authorization URL
    window.location.href = authorizationUrl;
}

window.addEventListener('DOMContentLoaded', function() {
  var accessToken = localStorage.getItem('spotifyAccessToken');
  if (accessToken) {
    // Redirect occurred and access token is available
    alert('Redirect successful! Access token: ' + accessToken);
  }
});
