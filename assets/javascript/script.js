---
---

// Repository settings
var	OWNER_NAME = '{{site.github.owner_name}}',
	PROJECT_NAME = '{{site.github.project_title}}',
	BUILD_REVISION = '{{ site.github.build_revision }}';

// Polyfills
{% include_relative polyfills/localStorage.js %}
{% include_relative polyfills/template.js %}

// fork-n-play scripts
{% include_relative FnP/loggator.js %}
{% include_relative FnP/repository.js %}
