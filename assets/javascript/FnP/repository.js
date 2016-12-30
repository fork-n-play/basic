var	oauthAuth = new GitHub(logged ? { token: logged } : {}),
	repo = oauthAuth.getRepo(OWNER_NAME, PROJECT_NAME),
	auth = logged ? oauthAuth.getUser() : false;

// READ REPO
repo.getDetails(function(e,r){
	// CHECK ADMIN
	if (r.permissions && r.permissions.admin) {
		// CHECK FORK
		if (r.owner.type === "User" && r.fork) {
			// Check synch
			var parentRepo = [r.parent.owner.login, r.parent.name].join('/');
			console.log('parent', parentRepo);
			// Get parent ref
			getRef(parentRepo, function(e,r) {
				console.log('parent ref', r.object.sha);
				if (r.object.sha != BUILD_REVISON) {
					// Update ref
					repo.createRef({ ref: 'refs/heads/master', sha: r.object.sha }, function (e,r) {
						console.log('new ref', r);
						flash('updated: new ref');
					});
				}
			});
		}
	} else {
		// HIDE ADMIN LINK
		document.querySelector('a[href*="admin"]').style.display = 'none';
	}
});
