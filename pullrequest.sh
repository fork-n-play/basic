if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
	SHA=`git rev-parse --verify HEAD`
	echo SHA: $SHA
	echo TRAVIS_BRANCH: ${TRAVIS_BRANCH}
	echo TRAVIS_PULL_REQUEST_BRANCH: ${TRAVIS_PULL_REQUEST_BRANCH}
	echo TRAVIS_SOURCE_BRANCH: ${TRAVIS_SOURCE_BRANCH}
	printf "\n**FILES**"
	git diff --name-only ..origin
	REPO=$(basename `git rev-parse --show-toplevel`)
	echo REPO: $REPO
	git clone $REPO
	# owner target repo
	USR=`git remote show origin -n | grep h.URL | sed 's/.*\/\/github.com\///;s/.git$//'| cut -d'/' -f1`
	echo USR: $USR
	echo Author aN, cN:
	git log -p -1 --pretty=format:"%aN - %cN"
	echo first commit
	git rev-list --max-parents=0 HEAD
	exit 0
fi
