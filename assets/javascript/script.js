---
---
var	OWNER_NAME = '{{site.github.owner_name}}',
	PROJECT_NAME = '{{site.github.project_title}}',
	BUILD_REVISION = '{{ site.github.build_revision }}';

{% include_relative FnP/loggator.js %}
{% include_relative FnP/repository.js %}
