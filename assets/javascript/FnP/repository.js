var	oauthAuth = new GitHub(logged ? { token: logged } : {}),
	repo = oauthAuth.getRepo(OWNER_NAME, PROJECT_NAME),
	auth = logged ? oauthAuth.getUser() : false;

// READ REPO
repo.getDetails(function(e,r){
	// CHECK ADMIN
	if (r.permissions && r.permissions.admin) {
		// Show admin link
		document.querySelector('a[href*="admin"][hidden]').removeAttribute('hidden');
		// CHECK FORK
		if (r.owner.type === "User" && r.fork) {
			// Check synch
			// var parentNwo = [r.parent.owner.login, r.parent.name].join('/');
			var parentRepo = oauthAuth.getRepo(r.parent.owner.login, r.parent.name);
			// Get parent ref
			parentRepo.getRef('heads/master', function(e,r) {
				console.log('parent ref', r.object.sha);
				if (r.object.sha !== BUILD_REVISION) {
					// Update ref
					repo.updateHead('heads/master', r.object.sha, true, function (e,sha) {
						console.log('new ref', sha.object.sha);
						dialog('updated: new ref');
					});
				}
			});
		}
	}
});
