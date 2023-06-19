function callAPI(){
    var client_id = "d9a800ac4ead4627ab1280e84dc5593c";
    var client_secret = "2a146bed322d494f886dbd2734807175";
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
