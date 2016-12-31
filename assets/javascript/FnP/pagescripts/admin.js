document.querySelector('footer pre').innerHTML += ' ' + logged || ' false' ;

if (logged) {
	// Check leagues.json
	repo.getContents('master', '_data/leagues.json').then(
		function (r) {
			dialog('leages present');
		}
	).catch(function (e) {
		dialog('no leages yet', 1);
	});
}
