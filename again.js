var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'https://google.com'
});

    console.log('SPOTIFY_CLIENT_ID', process.env.SPOTIFY_CLIENT_ID);
    console.log('SPOTIFY_CLIENT_SECRET', process.env.SPOTIFY_CLIENT_SECRET);
    console.log('SPOTIFY_ACCESS_TOKEN', process.env.SPOTIFY_ACCESS_TOKEN);



spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);

spotifyApi.getPlaylist('7hETJ4JNPRO8jMuwQJQc5k')
  .then(function(data) {
	  var items =data.body.tracks.items;
    //console.log('Some information about this playlist', items);
	//console.log(items[0].track.artists[0].name)
	const map1 = items.map(item => item.track.name.concat(' ').concat(item.track.artists[0].name));
	console.log(map1);
	/* */
	
	
	var exec = require('child_process').exec, child;
	var search = "start ".concat('https://www.youtube.com/results?search_query=').concat(encodeURI(map1[Math.floor(Math.random() * 90)]))
	console.log(search);
	child = exec(search),
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    };
 child();
  }, function(err) {
    console.log('Something went wrong!', err);
  });