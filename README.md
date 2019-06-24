# Spotify song list extractor from a play list

Have you ever wanted to get the complete song list from a spotify playlist?
The idea is to get the song name and author name and in the future be able to transform a spotify playlist to a youtube/deezer/soundclod/etc playlist.

This is a Wip but now given a spotify playlist id you can get the complete song list and also if you use windows open one random song in your default browser.

it's based on [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node) 
So you need to install it first:
>$ npm install spotify-web-api-node --save
Then you just need to optain your **clientId** and **clientSecret** from the [spotify dev page](https://developer.spotify.com/dashboard/)
Then you need an **access_token**:
To obtain the access_token you nedd to send the clientId:clientSecret encoded in Base 64
For instance you can use [this](https://www.base64encode.org/)
>curl -X "POST" -H "Authorization: Basic <Base64encode(clientId:clientSecret)>" -d grant_type=client_credentials https://accounts.spotify.com/api/token 
it will return you an **access_token** valid for 3600s
